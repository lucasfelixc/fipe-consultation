export {};

declare global {
  type FipeData = {
    codigo: string;
    nome: string;
  };

  type Inputs = {
    branding: { codigo: string; nome: string };
    model: { codigo: string; nome: string };
    year: { codigo: string; nome: string };
  };
}
