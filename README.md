# Wallee SDUI Backend Service

A minimal Node.js Express service that exposes a JSON schema for the Wallee SDUI frontend. It serves a single endpoint:

```
GET /api/schema
```

which returns the static `schema.json` payload configuring the frontend UI.

---

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running Locally](#running-locally)
* [Endpoint](#endpoint)
* [Deployment](#deployment)

---

## Prerequisites

* Node.js v14 or newer
* Yarn (or npm)

---

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/FitTech961/wallee-backend.git
cd wallee-backend
yarn install
```

---

## Running Locally

Start the service:

```bash
yarn start
```

The server listens on port 4000 by default. You can customize the port via the `PORT` environment variable.

---

## Endpoint

* **URL:** `/api/schema`
* **Method:** `GET`
* **Response:** `200 OK` with JSON payload from `schema.json`

Example:

```bash
curl http://localhost:4000/api/schema
```

---

## Deployment

The backend is deployed on Render:

* Any push or merge to the `main` branch automatically triggers a redeploy.
* Deployments may take a couple of minutes on the free tier.
* After deployment completes, reload your frontend application to see schema updates reflected in the UI.
