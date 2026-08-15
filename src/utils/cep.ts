export interface CepAddress {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

export async function fetchAddressByCep(cepDigits: string): Promise<CepAddress> {
  const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cepDigits}`);

  if (!response.ok) {
    throw new Error("CEP não encontrado");
  }

  const data = await response.json();

  return {
    cep: data.cep,
    state: data.state,
    city: data.city,
    neighborhood: data.neighborhood,
    street: data.street,
  };
}
