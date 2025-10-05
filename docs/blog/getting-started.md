---
title: Getting Started
---

<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)

onMounted(async () => {
  const response = await fetch('/data/getting-started.json')
  data.value = await response.json()
})
</script>

<div v-if="data">
  <h1>{{ data.title }}</h1>
  
  <p><em>📅 Published: {{ data.publishDate }}</em></p>
  
  <p>{{ data.intro }}</p>

  <h2>🛠️ Essential Tools</h2>
  
  <ul>
    <li v-for="tool in data.tools" :key="tool.name">
      <strong>{{ tool.icon }} {{ tool.name }}</strong>: {{ tool.options }}
    </li>
  </ul>

  <h2>🎯 Technologies to Learn</h2>
  
  <h3>🎨 Frontend</h3>
  <ul>
    <li v-for="tech in data.technologies.frontend" :key="tech.name">
      <strong>{{ tech.name }}</strong> - {{ tech.description }}
    </li>
  </ul>

  <h3>⚙️ Backend</h3>
  <ul>
    <li v-for="tech in data.technologies.backend" :key="tech.name">
      <strong>{{ tech.name }}</strong> - {{ tech.description }}
    </li>
  </ul>

  <h2>📋 Getting Started Steps</h2>
  <ol>
    <li v-for="step in data.steps" :key="step.title">
      <strong>{{ step.icon }} {{ step.title }}</strong> - {{ step.description }}
    </li>
  </ol>

  <div class="custom-container tip">
    <p class="custom-container-title">💡 Pro Tip</p>
    <p>{{ data.proTip }}</p>
  </div>

  <h2>📚 Learning Resources</h2>
  <ul>
    <li v-for="resource in data.resources" :key="resource.name">
      <a :href="resource.url" target="_blank">{{ resource.icon }} {{ resource.name }}</a> - {{ resource.description }}
    </li>
  </ul>

  <h2>🚀 Your First Project Ideas</h2>
  <ol>
    <li v-for="project in data.projectIdeas" :key="project.name">
      <strong>{{ project.icon }} {{ project.name }}</strong> - {{ project.description }}
    </li>
  </ol>

  <h2>🎯 Next Steps</h2>
  <p>Once you've mastered the basics:</p>
  <ul>
    <li v-for="step in data.nextSteps" :key="step.text">
      {{ step.icon }} {{ step.text }}
    </li>
  </ul>

  <p>Happy coding! 🚀</p>
</div>

<div v-else class="loading">
  <p>Loading content...</p>
</div>

<style scoped>
.custom-container.tip {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  background-color: #f3f5f7;
  border-color: #42b983;
}

.custom-container-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #999;
}
</style>
