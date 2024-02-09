import fs from 'fs/promises'

const presstart = async () => {
  const invoicesExists = (await fs.readdir('src/backend/db')).find(file => file === 'invoices')
  if (!invoicesExists) {
    await fs.mkdir('src/backend/db/invoices')
  }
}

presstart()
