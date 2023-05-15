import payload, { Payload } from "payload";

const registerModelo = async ({
  nome,
  codigo,
  marca,
}) => {
  const existing = await payload.find({
    collection: "modelos",
    where: {
      nome: nome,
      codigo: codigo,
      marcas: marca,
    },
  });
  console.log(existing)
  // if (!existing.docs && existing.docs.length === 0) {
    await payload.create({
      collection: "modelos",
      data: {
        nome: nome,
        codigo: codigo,
        marca: [marca],
      },
    });
  // }
};

export default registerModelo