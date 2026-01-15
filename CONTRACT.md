# DEV-PAIR - Frontend and backend contract:
This document defines the communication contract between frontend(Next.js + react) and backend(Node.js + express + socket.io).
## Base-URLS :
# Backend(Local):
http://localhost:5000;
# Frontend(Local):
http://localhost:3000;

## Authentication:
## Auth provider:
-Supabase Authentication
-JWT-based session handling

## Frontend Responsibility:
- Obtain user session from Supabase
- Attach userId to API requests & socket events

## Backend Responsibilty:
- Trust Supabase JWT (via middleware)
- Validate sessionId & senderId

## REST API CONTRACT:
- Send Message