const express = require('express')
const UserController = require('./controllers/userController')
const ProjectController = require('./controllers/projectController')
const TaskController = require('./controllers/taskController')

const app = express()
app.use(express.json())


app.post('/api/users', UserController.createUser)
app.get('/api/users', UserController.listUsers)
app.delete('/api/users/:id', UserController.deleteUser)


app.post('/api/projects', ProjectController.createProject)
app.get('/api/projects', ProjectController.listProjects)
app.delete('/api/projects/:id', ProjectController.deleteProject)


app.post('/api/tasks', TaskController.createTask)
app.get('/api/tasks', TaskController.listTasks)
app.delete('/api/tasks/:id', TaskController.deleteTask)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})