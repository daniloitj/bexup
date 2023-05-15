import payload, { Payload } from "payload";

const registerAno = async ({
    nome,
    codigo,
    marca,
  }) => {
    const existing = await payload.find({
      collection: "anos",
      where: {
        nome: nome,
        codigo: codigo,
        marca: marca,
      },
    });
    if (!existing || existing.totalDocs === 0) {
      await payload.create({
        collection: "anos",
        data: {
          nome: nome,
          codigo: codigo,
          marca: [marca],
        },
      });
    }
  };

export default registerAno