---
title: Web Development Tips
---

<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/data/web-development-tips.json')
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    data.value = await response.json()
  } catch (e) {
    console.error('Error loading data:', e)
    error.value = e.message
  }
})
</script>

<div v-if="error" class="error-message">
  ❌ Error: {{ error }}
</div>

<div v-else-if="data">
  <h1>{{ data.title }}</h1>
  
  <p><em>📅 Published: {{ data.publishDate }}</em></p>
  
  <p>{{ data.intro }}</p>

  <!-- Code Quality Section -->
  <h2>{{ data.codeQuality.title }}</h2>
  
  <div v-for="section in data.codeQuality.sections" :key="section.subtitle">
    <h3>{{ section.subtitle }}</h3>
    
    <ul v-if="Array.isArray(section.tips) && typeof section.tips[0] === 'string'">
      <li v-for="tip in section.tips" :key="tip" v-html="tip"></li>
    </ul>
    
    <ol v-else-if="section.tips[0].icon">
      <li v-for="tip in section.tips" :key="tip.text">
        <strong>{{ tip.icon }} {{ tip.text }}</strong>
      </li>
    </ol>
    
    <div v-if="section.codeExample" class="code-examples">
      <pre><code>{{ section.codeExample.bad }}</code></pre>
      <pre><code>{{ section.codeExample.good }}</code></pre>
    </div>
  </div>

  <!-- Common Mistakes Section -->
  <h2>{{ data.commonMistakes.title }}</h2>
  
  <h3>❌ Don't Do This</h3>
  <ul>
    <li v-for="item in data.commonMistakes.dontDo" :key="item.mistake">
      <strong>{{ item.mistake }}</strong> - {{ item.solution }}
    </li>
  </ul>
  
  <h3>✅ Do This Instead</h3>
  <ul>
    <li v-for="item in data.commonMistakes.doThis" :key="item.tip">
      <strong>{{ item.icon }} {{ item.tip }}</strong> - <span v-html="item.description"></span>
    </li>
  </ul>

  <!-- Performance Section -->
  <h2>{{ data.performance.title }}</h2>
  
  <h3>⚡ Speed Optimization</h3>
  <ul>
    <li v-for="opt in data.performance.optimization" :key="opt.tip">
      <strong>{{ opt.icon }} {{ opt.tip }}</strong> - {{ opt.description }}
    </li>
  </ul>
  
  <h3>📊 Tools for Performance</h3>
  <ul>
    <li v-for="tool in data.performance.tools" :key="tool.name">
      <strong>{{ tool.name }}</strong> - {{ tool.description }}
    </li>
  </ul>

  <!-- Design & UX Section -->
  <h2>{{ data.designUX.title }}</h2>
  
  <h3>🎯 User Experience</h3>
  <ul>
    <li v-for="ux in data.designUX.userExperience" :key="ux.tip">
      <strong>{{ ux.tip }}</strong> - {{ ux.description }}
    </li>
  </ul>
  
  <h3>📱 Responsive Design</h3>
  <pre><code class="language-css">{{ data.designUX.responsiveCode }}</code></pre>

  <!-- Debugging Section -->
  <h2>{{ data.debugging.title }}</h2>
  
  <h3>🐛 Finding and Fixing Bugs</h3>
  <ol>
    <li v-for="bug in data.debugging.findingBugs" :key="bug">{{ bug }}</li>
  </ol>
  
  <h3>🛠️ Debugging Tools</h3>
  <ul>
    <li v-for="tool in data.debugging.tools" :key="tool.name">
      <strong>{{ tool.name }}</strong> - {{ tool.description }}
    </li>
  </ul>

  <!-- Learning Resources Section -->
  <h2>{{ data.learningResources.title }}</h2>
  
  <h3>🎓 Free Learning Platforms</h3>
  <ul>
    <li v-for="platform in data.learningResources.platforms" :key="platform.name">
      <strong>{{ platform.name }}</strong> - {{ platform.description }}
    </li>
  </ul>
  
  <h3>🤝 Community Resources</h3>
  <ul>
    <li v-for="community in data.learningResources.community" :key="community.name">
      <strong>{{ community.name }}</strong> - {{ community.description }}
    </li>
  </ul>

  <!-- Career Tips Section -->
  <h2>{{ data.careerTips.title }}</h2>
  
  <h3>💼 Building Your Portfolio</h3>
  <ul>
    <li v-for="tip in data.careerTips.portfolio" :key="tip">{{ tip }}</li>
  </ul>
  
  <h3>🚀 Getting Your First Job</h3>
  <ul>
    <li v-for="tip in data.careerTips.firstJob" :key="tip">{{ tip }}</li>
  </ul>

  <!-- Pro Tip -->
  <div class="custom-container tip">
    <p class="custom-container-title">💡 Remember</p>
    <p>{{ data.proTip }}</p>
  </div>

  <!-- Final Tips -->
  <h2>🔥 Final Tips</h2>
  <ul>
    <li v-for="tip in data.finalTips" :key="tip.text">
      <strong>{{ tip.icon }} {{ tip.text }}</strong>
    </li>
  </ul>

  <p>Happy coding! 🚀</p>
</div>

<div v-else class="loading">
  Loading content...
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

.error-message {
  padding: 20px;
  background: #fee;
  border: 2px solid #f00;
  border-radius: 8px;
  color: #900;
}

.code-examples {
  margin: 20px 0;
}

.code-examples pre {
  background: #f6f6f6;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 10px 0;
}

.code-examples code {
  font-family: 'Courier New', monospace;
  font-size: 14px;
}
</style>
