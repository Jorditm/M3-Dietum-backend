# Dietum

## Description

es una plataforma en la que dietista y cliente esta conectado, a traces de Diet Manager podras ver la tabla de comidas que el dietista prepara y actualizaciones a tiempo real de la dieta

## User Stories

- **Signup:** As an anon I can sign up in the platform so that I can start manage the dietitian's users
- **Login:** As a user I can login to the platform so that I can manage the dietitian's users
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Edit Dietitian Profile**
- **Add Patients** As a dietitian, I can add users and then manage the information
- **Patient profile** As a dietitian, I can see, the profile's user, and see other user profiles
- **Dashboard** As a dietitian, I can see all users
- **Diet table** a table where to add and remove food
- **Menage food** I can add and delete food, weight and energy (kcal) in the diet list

## MVP & Backlog

## Client

### Routes

| Path              | Component  | Permissions | Behavior                                                                 |
| ----------------- | ---------- | ----------- | ------------------------------------------------------------------------ |
| `/`               | SplashPage | anon only   | Home page                                                                |
| `/signup`         | SignupPage | anon only   | Signup form, link to login, navigate to edit alumni profile after signup |
| `/login`          | LoginPage  | anon only   | Login form, link to signup, navigate to home directory after login       |
| `/logout`         | n/a        | anon only   | Navigate to public homepage after logout, expire session                 |
| `/principal`      |            |             |                                                                          |
| `/patientForm`    |            |             |                                                                          |
| `/patientProfile` |            |             |                                                                          |
| `/Diet`           |            |             |                                                                          |
|                   |            |             |                                                                          |
|                   |            |             |                                                                          |
|                   |            |             |                                                                          |

### Components

### Services

## Server

### Models

Dietitian {
name: { type: String },
lastName: { type: String, default: "" },
proName: { type: String, default: "" },
email: {
type: String,
match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
required: true,
unique: true},
password: { type: String, minlength: 6, required: true },
//tableDiet: { type: Array },
users: [{ type: Schema.Types.ObjectId, ref: "User" }],
tableFood: [{ type: Schema.Types.ObjectId, ref: "TableFood" }],
isDietitian: { type: Boolean, default: true }

}

### Schemas

### Data structure

#### Front-end routes

### API Endpoints (Backend routes)

| HTTP Method | URL                      | Request Body                                                                                                        | Success status | Error Status | Description                                                                                                                     |
| ----------- | ------------------------ | :------------------------------------------------------------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/me`               |                                                                                                                     | 2009           | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`           |                                                                                                                     | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`            | {username, password}                                                                                                | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`           | (empty)                                                                                                             | 204            | 400          | Logs out the user                                                                                                               |
| GET         | `/dietitian/allPatients` |                                                                                                                     | 200            | 500          | Get all the information from your patients by ID                                                                                |
| POST        | `/dietitian/createUser`  | {name, lastName, email, gender, age, weight, height, hipPerimeter, neckPerimeter, objectives, foodAllergies, smoke} | 200            | 500          | Create a new Patient with all the information                                                                                   |
| POST        | `/dietitian//add/:id`    |                                                                                                                     | 200            |              | Adds the patient to the ID of the dietitian who created him                                                                     |
| GET         | `/dietitian/profile/:id` |                                                                                                                     | 200            | 500          | We obtain all the information from the patient that we have created before                                                      |
| POST        | `/dietitian/delete/:id`  | {id}                                                                                                                | 200            |              | We can delete a patient from DB                                                                                                 |

### States & States transitions

### Task

### Link
