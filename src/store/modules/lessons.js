const state = {
  lessonProgress: 1,
  areLessonsLoaded: false,
  lessons: []
};

const getters = {
  singleLesson(state) {
    return function(id) {
      return state.lessons.find(lesson => lesson.id == id);
    };
  }
};

const actions = {
  async getLessons({ commit }) {
    try {
      const res = await fetch("http://localhost:4000/lessons");
      const lessons = await res.json();
      commit("SET_LESSONS", lessons);
      commit("FINISHED_LOADING");
    } catch (e) {
      console.log(e);
    }
  }
};

const mutations = {
  SET_LESSONS(state, data) {
    state.lessons = data;
  },
  FINISHED_LOADING(state) {
    state.areLessonsLoaded = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
