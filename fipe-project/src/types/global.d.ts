export {};

declare global {
  type VehicleData = {
    codigo: string;
    nome: string;
  };

  type Inputs = {
    branding: { codigo: string; nome: string };
    model: { codigo: string; nome: string };
    year: { codigo: string; nome: string };
  };

  type FipeData = {
    AnoModelo: number;
    CodigoFipe: string;
    Combustivel: string;
    Marca: string;
    MesReferencia: string;
    Modelo: string;
    SiglaCombustivel: string;
    TipoVeiculo: number;
    Valor: string;
  };
}
