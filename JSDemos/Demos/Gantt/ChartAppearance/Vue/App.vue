<template>
  <div id="form-demo">
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Scale Type</span>
        <DxSelectBox
          :items="['auto', 'minutes', 'hours', 'days', 'weeks', 'months', 'quarters', 'years']"
          v-model="scaleType"
        />
      </div>
      <div class="option">
        <span>Title Position</span>
        <DxSelectBox
          :items="['inside', 'outside', 'none']"
          v-model="taskTitlePosition"
        />
      </div>
      <div class="option">
        <DxCheckBox
          v-model="showResources"
          text="Show Resources"
        />
      </div>
    </div>
    <div class="widget-container">
      <DxGantt
        :task-list-width="500"
        :height="700"
        :task-title-position="taskTitlePosition"
        :scale-type="scaleType"
        :show-resources="showResources"
      >

        <DxTasks :data-source="tasks"/>
        <DxDependencies :data-source="dependencies"/>
        <DxResources :data-source="resources"/>
        <DxResourceAssignments :data-source="resourceAssignments"/>

        <DxEditing :enabled="true"/>

        <DxColumn
          :width="300"
          data-field="title"
          caption="Subject"
        />
        <DxColumn
          data-field="start"
          caption="Start Date"
        />
        <DxColumn
          data-field="end"
          caption="End Date"
        />
      </DxGantt>
    </div>
  </div>
</template>
<script>
import {
  DxGantt,
  DxTasks,
  DxDependencies,
  DxResources,
  DxResourceAssignments,
  DxColumn,
  DxEditing
} from 'devextreme-vue/gantt';
import DxCheckBox from 'devextreme-vue/check-box';
import DxSelectBox from 'devextreme-vue/select-box';

import {
  tasks,
  dependencies,
  resources,
  resourceAssignments
} from './data.js';

export default {
  components: {
    DxGantt,
    DxTasks,
    DxDependencies,
    DxResources,
    DxResourceAssignments,
    DxColumn,
    DxEditing,
    DxCheckBox,
    DxSelectBox
  },
  data() {
    return {
      tasks: tasks,
      dependencies: dependencies,
      resources: resources,
      resourceAssignments: resourceAssignments,
      scaleType: 'quarters',
      taskTitlePosition: 'outside',
      showResources: true
    };
  }
};
</script>
<style>
  #gantt {
    height: 700px;
  }

  .options {
    margin-bottom: 20px;
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    position: relative;
  }

  .caption {
    font-size: 18px;
    font-weight: 500;
  }

  .option {
    margin-top: 10px;
    margin-right: 40px;
    display: inline-block;
  }

  .option:last-child {
    margin-right: 0;
  }
</style>
