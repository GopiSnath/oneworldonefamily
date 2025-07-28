

import { 
  contactRequests, 
  events, 
  donations,
  type ContactRequest, 
  type InsertContactRequest,
  type Event,
  type InsertEvent,
  type Donation,
  type InsertDonation
} from "@shared/schema";

export interface IStorage {
  // Contact requests
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  
  // Events
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Donations
  getDonations(): Promise<Donation[]>;
  createDonation(donation: InsertDonation): Promise<Donation>;
}

export class MemStorage implements IStorage {
  private contactRequests: Map<number, ContactRequest>;
  private events: Map<number, Event>;
  private donations: Map<number, Donation>;
  private currentContactId: number;
  private currentEventId: number;
  private currentDonationId: number;

  constructor() {
    this.contactRequests = new Map();
    this.events = new Map();
    this.donations = new Map();
    this.currentContactId = 1;
    this.currentEventId = 1;
    this.currentDonationId = 1;
    
    // Initialize with some default events and donations
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    // Default events
    const defaultEvents: Event[] = [
      {
        id: this.currentEventId++,
        title: "Holi Celebration",
        titleTa: "ஹோலி விழா",
        description: "Join us for the vibrant festival of colors with traditional prayers and community festivities.",
        descriptionTa: "பாரம்பரிய பிரார்த்தனைகள் மற்றும் சமூக விழாக்களுடன் வண்ணங்களின் துடிப்பான திருவிழாவில் எங்களுடன் சேருங்கள்.",
        date: "15 March",
        time: "6:00 AM - 12:00 PM",
        icon: "🎊",
        createdAt: new Date()
      },
      {
        id: this.currentEventId++,
        title: "Weekly Satsang",
        titleTa: "வாராந்திர சத்சங்கம்",
        description: "Spiritual discourse and divine music sessions for inner peace and enlightenment.",
        descriptionTa: "உள் அமைதி மற்றும் ஞானத்திற்காக ஆன்மீக சொற்பொழிவு மற்றும் தெய்வீக இசை அமர்வுகள்.",
        date: "Every Saturday",
        time: "7:00 PM - 9:00 PM",
        icon: "🕉️",
        createdAt: new Date()
      },
      {
        id: this.currentEventId++,
        title: "Special Abhishek",
        titleTa: "சிறப்பு அபிஷேகம்",
        description: "Sacred ritual bathing of the deity with holy substances and divine offerings.",
        descriptionTa: "புனித பொருட்கள் மற்றும் தெய்வீக காணிக்கைகளுடன் தெய்வத்தின் புனித குளியல் சடங்கு.",
        date: "22 March",
        time: "5:30 AM - 8:00 AM",
        icon: "🪷",
        createdAt: new Date()
      }
    ];

    // Default donations
    const defaultDonations: Donation[] = [
      {
        id: this.currentDonationId++,
        category: "Temple Maintenance",
        categoryTa: "கோவில் பராமரிப்பு",
        description: "Support the upkeep of our sacred spaces and divine decorations.",
        descriptionTa: "எங்கள் புனித இடங்கள் மற்றும் தெய்வீக அலங்காரங்களின் பராமரிப்பை ஆதரிக்கவும்.",
        targetAmount: 500000,
        currentAmount: 250000,
        icon: "🏛️",
        createdAt: new Date()
      },
      {
        id: this.currentDonationId++,
        category: "Daily Seva",
        categoryTa: "தினசரி சேவை",
        description: "Sponsor daily prayers, offerings, and ritual ceremonies.",
        descriptionTa: "தினசரி பிரார்த்தனைகள், காணிக்கைகள் மற்றும் சடங்கு விழாக்களுக்கு நன்கொடை அளிக்கவும்.",
        targetAmount: 300000,
        currentAmount: 180000,
        icon: "🪷",
        createdAt: new Date()
      },
      {
        id: this.currentDonationId++,
        category: "Anna Daan",
        categoryTa: "அன்ன தானம்",
        description: "Support our community kitchen serving free meals to devotees.",
        descriptionTa: "பக்தர்களுக்கு இலவச உணவு வழங்கும் எங்கள் சமூக சமையலறையை ஆதரிக்கவும்.",
        targetAmount: 200000,
        currentAmount: 90000,
        icon: "🍽️",
        createdAt: new Date()
      }
    ];

    defaultEvents.forEach(event => this.events.set(event.id, event));
    defaultDonations.forEach(donation => this.donations.set(donation.id, donation));
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentContactId++;
    const request: ContactRequest = {
      ...insertRequest,
      id,
      createdAt: new Date()
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = {
      ...insertEvent,
      id,
      createdAt: new Date()
    };
    this.events.set(id, event);
    return event;
  }

  async getDonations(): Promise<Donation[]> {
    return Array.from(this.donations.values());
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = this.currentDonationId++;
    const donation: Donation = {
      ...insertDonation,
      id,
      createdAt: new Date()
    };
    this.donations.set(id, donation);
    return donation;
  }
}

export const storage = new MemStorage();
