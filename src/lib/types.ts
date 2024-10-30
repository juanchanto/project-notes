// src/lib/types.ts

// Interfaz para los datos de una nota
export interface Note {
    id?: number; // ID opcional, asumiendo que es autoincremental
    title: string; // Título de la nota
    content: string; // Contenido de la nota
    created_at?: string; // Fecha de creación opcional
}

// Interfaz para la respuesta de Supabase al obtener datos
export interface SupabaseResponse<T> {
    data: T | null; // Los datos, que pueden ser nulos si no hay resultados
    error: {
        message: string; // Mensaje de error, si lo hay
        code?: string; // Código de error opcional
    } | null; // Error, que puede ser nulo si no hay errores
}
