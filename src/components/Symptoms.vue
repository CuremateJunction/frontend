<script setup>
import { ref } from 'vue';

const props = defineProps(['onSymptomsSelected']);

const symptoms = ref([
  { emoji: '🥱', label: 'Tired', ticked: false },
  { emoji: '🤕', label: 'Headache', ticked: false },
  { emoji: '🤯', label: 'Migraine', ticked: false },
  { emoji: '🩸', label: 'Blood pressure', ticked: false },
  { emoji: '🥹', label: 'Mood changes', ticked: false },
  { emoji: '🫨', label: 'Blurred vision', ticked: false },
  { emoji: '😫', label: 'Fatigue', ticked: false },
  { emoji: '🤢', label: 'Nausea', ticked: false },
  { emoji: '💡', label: 'Light sensitivity', ticked: false },
  { emoji: '🔊', label: 'Sound sensitivity', ticked: false },
]);

const toggleSymptom = (symptom) => {
  symptom.ticked = !symptom.ticked;
  props.onSymptomsSelected(symptom.ticked);
};
</script>

<template>
  <h3>How do you feel today?</h3>
  <div class="symptoms">
    <ul>
      <li
        v-for="symptom in symptoms"
        :class="{ ticked: symptom.ticked }"
        @click="toggleSymptom(symptom)">
        <div class="symptom-item">
          <span class="emoji">{{ symptom.emoji }}</span>
          <small>{{ symptom.label }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.symptoms {
  overflow: scroll;
}
h3 {
  margin-top: 40px;
}
ul {
  list-style-type: none;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  padding-left: 0;
}
li {
  cursor: pointer;
  padding: 10px;
  text-align: center;
}
li.ticked {
  background: #cdfafa;
  border: 2px solid;
  border-radius: 10px;
  padding: 8px;
  border-color: #0fbfbf;
}
.symptom-item {
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}
.emoji {
  font-size: 3rem;
  user-select: none;
}
small {
  color: #0fbfbf;
  user-select: none;
}
</style>
