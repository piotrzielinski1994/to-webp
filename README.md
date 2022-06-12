## Development

```bash
nvm use
npm ci

npm start
```

## Usage

```bash
curl --location --request POST 'http://localhost:3000' \
  --form 'file=@"/path/to/file"' \
  --form 'quality=100'
```
