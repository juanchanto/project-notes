// src/app/page.tsx
import { createClient } from '@/utils/supabase/server';
import styles from './Notes.module.css'; // Asegúrate de que la ruta sea correcta
import { Note } from '@/lib/types';

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes }: { data: Note[] | null } = await supabase.from("notes").select();

  /*if (error) {
    console.error("Error fetching notes:", error);
    return <p>No se pudieron cargar las notas.</p>;
  }*/

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Notas</h1>
      <div className={styles.notesContainer}>
        {notes ? (
          notes.map(note => ( // Usa 'note' aquí o define una interfaz para las notas
            <div key={note.id} className={styles.noteCard}>
              <h2 className={styles.noteTitle}>{note.title}</h2>
              <p className={styles.noteContent}>{note.content}</p>
              <small className={styles.noteDate}>
                Creado el: {new Date(note.created_at ?? '').toLocaleDateString()}
              </small>
            </div>
          ))
        ) : (
          <p className={styles.noNotesMessage}>No hay notas disponibles.</p>
        )}
      </div>
    </div>
  );
}
