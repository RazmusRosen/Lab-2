import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as scripts from './components/project_assignments.jsx'
import H1  from './components/h1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <H1 />
    <scripts.FetchProjectAssignments />
  </StrictMode>,
)
