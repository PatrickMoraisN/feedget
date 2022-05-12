![banner](src/assets/photobase.png)
<br />

# :pushpin: Index
- [About](#monocle_face-about)
- [Project Media](#camera_flash-project-media)
- [Technologies](#rocket-technologies)
- [Installation](#hammer_and_wrench-installation-steps)
- [Author](#closed_book-author)
<br />

---

# :monocle_face: About
Project designed to practice React integration with Firebase Storage and Google OAuth / Theme Switch.

To log into the application, react-google-login lib was used.
Data is persisted to Local Storage via useGoogleAuthInfo Hook.

To change themes, Styled Components Theme Context was used via useSwitchTheme Hook.

I hope you enjoy :D
<br />

---

# :camera_flash: Project Media
![Imagem do projeto](assets/image.png)

![Imagem do projeto](assets/feedget.gif)

<br />

---

# :rocket: Technologies
This project was developed with the following technologies: <br>

  ## Front-end
    - :heavy_check_mark: **React**
    - :heavy_check_mark: **TypeScript**
    - :heavy_check_mark: **Jest/React Testing Library**
    - :heavy_check_mark: **ESLint**
    - :heavy_check_mark: **Prettier**

  ## Back-end
    - :heavy_check_mark: **Node**
    - :heavy_check_mark: **TypeScript**
    - :heavy_check_mark: **Prisma**
    - :heavy_check_mark: **Jest**
    - :heavy_check_mark: **Express/Nodemailer/Cors**


- :heavy_check_mark: **React**
- :heavy_check_mark: **Context API**
- :heavy_check_mark: **Hooks**
- :heavy_check_mark: **Styled Components**
- :heavy_check_mark: **TypeScript**
- :heavy_check_mark: **OAuth**
- :heavy_check_mark: **Firebase Storage**
- :heavy_check_mark: **Modal / Toastify / Switch**
- :heavy_check_mark: **ESLint**
- :heavy_check_mark: **Prettier**
<br><br>
<br />

---

# :hammer_and_wrench: Installation Steps
**This project involves many .env files, be sure you have them!**

---
**You must have an active project on google console**
  - Go to `https://console.cloud.google.com/`
  - Create and configure a new project API (set `http://localhost:3000` in allowed urls).
  - Save `client_id` and `secret_key` keys, we need them.

**You must have an active project on Firebase**
  - Go to `https://console.firebase.google.com/`
  - Create and configure a new project.
  - Save Firebase keys, we need them.
  - On Storage session, create a folder `images`.
  - On Storage session, set `Rules` to: <br>

  ```js
  rules_version = '2';
  service firebase.storage {
    match /b/{bucket}/o {
      match /{allPaths=**} {
        allow read, write: if request.auth!=null;
      }
    }
  }
```
---

1. Clone the repository

```bash
git clone git@github.com:PatrickMoraisN/Photobase.git
```

2. Change the working directory

```bash
cd Photobase
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root and add your variables

```bash
### GOOGLE

REACT_APP_CLIENT_ID=__your-client-id-from-google__
REACT_APP_SECRET_KEY_CLIENT=__your-secret-key-from-google__

### FIREBASE

REACT_APP_API_KEY=__your-api-key-from-firebase__
REACT_APP_AUTH_DOMAIN=__your-auth-domain-from-firebase__
REACT_APP_PROJECT_ID=__your-project-id-from-firebase__
REACT_APP_STORAGE_BUCKET=__your-storage-bucket-from-firebase__
REACT_APP_MESSAGING_SENDER_ID=__your-messaging-sender-id-from-firebase__
REACT_APP_APP_ID=__your-app-id-from-firebase__


```

5. Run the app

```bash
npm start
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.

---

# :closed_book: Author
Patrick Morais <br>
[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-6633cc?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/patrick-morais/)](https://www.linkedin.com/in/patrick-morais/)<br>
[![Gmail Badge](https://img.shields.io/badge/-ppternunes@gmail.com-6633cc?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ppternunes@gmail.com)](mailto:ppternunes@gmail.com)<br>
[![GitHub Badge](https://img.shields.io/badge/-Patrick%20Morais-6633cc?style=flat-square&logo=github&logoColor=white)](https://www.github.com/patrickmoraisn/)