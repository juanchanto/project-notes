import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import styles from '@/app/Notes.module.css';
import { Note } from '@/lib/types';
import HeaderAuth from '../components/HeaderAuth';

export default async function PrivateNotes() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect('/login');
    }
    
    const { data: notes }: { data: Note[] | null } = await supabase.from("notes").select();

    return (
        <div className={styles.container}>
            <HeaderAuth/>
            <p>Hello {data.user.email} </p>
            <h1 className={styles.title}>Notas</h1>
            <button className={styles.backupButton}>Hacer Respaldo</button>
            <div className={styles.notesContainer}>
                {notes ? (
                    notes.map((note: Note) => (
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
