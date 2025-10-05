---
title: Getting Started
---

<script setup>
import data from './.vuepress/data/getting-started.json'
</script>

# {{ data.title }}

_📅 Published: {{ data.publishDate }}_

{{ data.intro }}

## 🛠️ Essential Tools

<div class="tools-grid">
  <div v-for="tool in data.tools" :key="tool.name" class="tool-card">
    <span class="icon">{{ tool.icon }}</span>
    <strong>{{ tool.name }}</strong>: {{ tool.options }}
  </div>
</div>

## 🎯 Technologies to Learn

### 🎨 Frontend

<ul>
  <li v-for="tech in data.technologies.frontend" :key="tech.name">
    <strong>{{ tech.name }}</strong> - {{ tech.description }}
  </li>
</ul>

### ⚙️ Backend

<ul>
  <li v-for="tech in data.technologies.backend" :key="tech.name">
    <strong>{{ tech.name }}</strong> - {{ tech.description }}
  </li>
</ul>

## 📋 Getting Started Steps

<ol class="steps-list">
  <li v-for="(step, index) in data.steps" :key="index">
    <span class="step-icon">{{ step.icon }}</span>
    <strong>{{ step.title }}</strong> - {{ step.description }}
  </li>
</ol>

::: tip 💡 Pro Tip
{{ data.proTip }}
:::

## 📚 Learning Resources

<div class="resources-grid">
  <a 
    v-for="resource in data.resources" 
    :key="resource.name"
    :href="resource.url"
    class="resource-card"
    target="_blank"
  >
    <span class="icon">{{ resource.icon }}</span>
    <h3>{{ resource.name }}</h3>
    <p>{{ resource.description }}</p>
  </a>
</div>

## 🚀 Your First Project Ideas

<div class="projects-grid">
  <div v-for="project in data.projectIdeas" :key="project.name" class="project-card">
    <span class="project-icon">{{ project.icon }}</span>
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
  </div>
</div>

## 🎯 Next Steps

Once you've mastered the basics:

<ul class="next-steps">
  <li v-for="step in data.nextSteps" :key="step.text">
    <span class="icon">{{ step.icon }}</span> {{ step.text }}
  </li>
</ul>

Happy coding! 🚀

<style scoped>
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.tool-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.tool-card .icon {
  font-size: 24px;
  margin-right: 10px;
}

.steps-list {
  counter-reset: step-counter;
  list-style: none;
  padding-left: 0;
}

.steps-list li {
  counter-increment: step-counter;
  padding: 15px;
  margin: 10px 0;
  border-left: 3px solid #42b983;
  background: #f9f9f9;
}

.steps-list li::before {
  content: counter(step-counter);
  background: #42b983;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 50%;
  margin-right: 15px;
}

.step-icon {
  font-size: 24px;
  margin-right: 10px;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.resource-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.resource-card .icon {
  font-size: 48px;
  display: block;
  text-align: center;
  margin-bottom: 10px;
}

.resource-card h3 {
  margin: 10px 0;
  color: #42b983;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.project-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.project-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 10px;
}

.project-card h3 {
  color: white;
  margin: 10px 0;
}

.next-steps {
  list-style: none;
  padding: 0;
}

.next-steps li {
  padding: 10px;
  margin: 10px 0;
  background: #f9f9f9;
  border-radius: 5px;
}

.next-steps .icon {
  font-size: 20px;
  margin-right: 10px;
}
</style>
