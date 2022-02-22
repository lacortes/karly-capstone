# Karly Capstone

Karly Capstone is a website whose main content can only be viewed by users who have requested access and have been authorized. The site requires the provided temp password and then makes use of JWT for subsequent authorization.

## Installation
---

### Install Node (v16.13.0) 

**Homebrew (macOS)**

```bash
brew install node@16
```

LTS version intalls are keg-only so might need to run
```bash
brew link --force node@16
```
and follow directions.

**Chocolatey (Windows)**

```bash
choco install nodejs-lts --version 16.13.0 -y
```

**Manual Installation**
[Node](https://nodejs.org/ko/blog/release/v16.13.0/)

### Install project dependencies
```bash
npm i
```
### Configure dev domain and HTTPS
#### **Dev Domain**
To your hosts file add the entry
```bash
127.0.0.1 karly-capstone.dev
```
#### **Self Signed Certificates**
Install mkcert

**Homebrew (macOS)**
```bash
brew install mkcert
brew install nss # if you use Firefox
```
**Chocolatey (Windows)**
```bash
choco install mkcert
```
**Local CA**
```bash
mkcert -install
```

**Create SSL Certs**
```bash
mkcert karly-capstone.dev
```
after they are created a message should pop up with the location of the certs:
```bash
The certificate is at "./karly-capstone.dev.pem" and the key at "./karly-capstone.dev-key.pem"
```

**Add SSL Certs for webpack server**<br>
Under project root create a directory: `ssl/` and move the created `.pem` files to it
```bash
project-root
|
 - src/
|
 - ssl/
    |
     - karly-capstone.dev.pem
     - karly-capstone.dev-key.pem
```

## Development
---

You can run the project in development mode via:
```bash
npm run start
```
