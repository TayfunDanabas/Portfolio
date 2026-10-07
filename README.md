# Portfolio

My personal portfolio website – who I am, what I can do and the projects I have built.

## Tech stack

- Angular 22 (standalone components)
- SCSS
- ngx-translate (German / English)

## Development

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

## Build

```bash
npm run build
```

The production files are created in `dist/portfolio/browser`.

## Deployment

Upload the content of `dist/portfolio/browser` to the web server, including:

- `.htaccess` – so that pages like `/impressum` also work after a reload
- `sendMail.php` – sends the messages from the contact form

To host it in a `Portfolio` folder, for example on the Developer Akademie server, build it with:

```bash
npm run build:da
```

Then upload the content of `dist/portfolio/browser` into that folder.
