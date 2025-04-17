import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as scripts from './components/project_assignments.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <scripts.TableStructure />
  </StrictMode>,
)
