export interface Purchase {
    id: string;
    date: string;
    time: string;
    status: boolean;
    quantity: number;
    totalPrice: number;
    userId: string;
    ticketId: string;
}