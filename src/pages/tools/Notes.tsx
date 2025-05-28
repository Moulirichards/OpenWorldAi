
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileText, Plus, Trash2 } from 'lucide-react';

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Learning Goals', content: 'Complete computer basics course by next week' },
    { id: 2, title: 'Job Applications', content: 'Apply to three positions this month' },
    { id: 3, title: 'Health Reminders', content: 'Doctor appointment on Friday' }
  ]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  const addNote = () => {
    if (newNote.title && newNote.content) {
      setNotes([...notes, { ...newNote, id: Date.now() }]);
      setNewNote({ title: '', content: '' });
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <FileText className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Notes</h1>
          <p className="text-gray-600">Keep track of important information</p>
        </div>
        
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Add New Note</h2>
          <div className="space-y-4">
            <Input
              placeholder="Note title..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
            <textarea
              placeholder="Note content..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              className="w-full p-3 border rounded-lg h-24 resize-none"
            />
            <Button onClick={addNote}>
              <Plus className="h-4 w-4 mr-2" />
              Add Note
            </Button>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <Card key={note.id} className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{note.title}</h3>
                <Button 
                  onClick={() => deleteNote(note.id)}
                  variant="outline" 
                  size="sm"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-gray-600">{note.content}</p>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notes;
