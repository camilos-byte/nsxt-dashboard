// /app/lib/definitions.tsarchivo. Aquí, 
// definimos manualmente los tipos que se 
// devolverán desde la base de datos.

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'paid';
  };