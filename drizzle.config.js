import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';


export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:xaIpBO5PX3zi@ep-bitter-hall-a5tzwlo2.us-east-2.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});