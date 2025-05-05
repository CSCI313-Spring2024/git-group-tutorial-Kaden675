import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  name = '';
  email = '';
  message = '';
  successMessage = '';

  constructor(private firestore: Firestore) {}

  async submitSupportMessage() {
    try {
      const supportRef = collection(this.firestore, 'supportMessages');
      await addDoc(supportRef, {
        name: this.name,
        email: this.email,
        message: this.message,
        timestamp: new Date()
      });

      this.successMessage = 'Message sent successfully!';
      this.name = '';
      this.email = '';
      this.message = '';
    } catch (error) {
      console.error('Error sending message:', error);
      this.successMessage = 'Failed to send message. Please try again.';
    }
  }
}
