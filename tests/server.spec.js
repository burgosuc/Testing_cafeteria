const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    // Test a la ruta Get /cafes deuelve un status 200, con un arreglo con al menos un Objeto
    it("GET/cafes devuelve un status 200 y arreglo no vacio", async () => {
        const response = await request(server).get("/cafes").send()
        const body = response.body
        const status = response.statusCode;

        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBeGreaterThan(0);
    });

    //Test para obtener un code 404 al intentar obtener un cafe inexistente
    it("DELETE/cafes/:id comprobar que no se puede eliminar un cafe inexistente", async () => {
        const jwt = "token"
        const { statusCode } = await request(server)

            .delete("/cafes/100")
            .set("Authorization", jwt)
            .send()

        expect(statusCode).toBe(404)
    });

    //Test a la ruta POST /cafes deuelve un status 201, con un cafe nuevo creado}
    it("POST/cafes test al agregar un nuevo cafe corectamente, devolver un status 201", async () => {
        const newCoffe = { id: 5, nombre: "Cafe con leche" }
        const response = await request(server).post("/cafes").send(newCoffe)
        const body = response.body
        const status = response.statusCode;

        expect(body).toContainEqual(newCoffe)
        expect(status).toBe(201)
    });

    //Test a la ruta PUT /cafes devuelve un status 400, si intentas actualizar un cafe enviado un id en los parametros que sea diferente al id dentro del payload
    it("PUT/cafes status 400 al modificar un cafe con id diferente al id del payload", async () => {
        const getId ="id obtenido"
        const coffe = { id: "id diferente al del payload", nombre: "Cafe con leche" }
        const { statusCode } = await request(server)

            .put(`/cafes/${getId}`)
            .send(coffe)
        expect(statusCode).toBe(400)
    })

});
