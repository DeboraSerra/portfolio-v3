import fs from 'fs/promises'

const presstart = async () => {
  const db = (await fs.readdir('src/backend/db'))
  const invoicesExists = db.includes('invoices')
  const loginExists = db.includes('login.json')
  if (!invoicesExists) {
    await fs.mkdir('src/backend/db/invoices')
  }
  if (!loginExists) {
    await fs.writeFile('src/backend/db/login.json', JSON.stringify([]))
  }
}

presstart()
