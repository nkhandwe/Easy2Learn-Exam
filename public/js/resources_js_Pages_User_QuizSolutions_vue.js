"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_QuizSolutions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/BackButton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/BackButton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    goBack: function goBack() {
      window.history.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      show: true
    };
  },
  computed: {
    style: function style() {
      var _this$$page$props$jet;
      return ((_this$$page$props$jet = this.$page.props.jetstream.flash) === null || _this$$page$props$jet === void 0 ? void 0 : _this$$page$props$jet.bannerStyle) || 'success';
    },
    message: function message() {
      var _this$$page$props$jet2;
      return ((_this$$page$props$jet2 = this.$page.props.jetstream.flash) === null || _this$$page$props$jet2 === void 0 ? void 0 : _this$$page$props$jet2.banner) || '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "QuestionChip",
  props: {
    sno: Number | String,
    status: {
      type: String,
      "default": ''
    },
    isActive: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    statusClasses: function statusClasses() {
      switch (this.status) {
        case 'success':
          return 'bg-green-400';
        case 'warning':
          return 'bg-purple-400';
        case 'caution':
          return 'bg-yellow-400';
        case 'danger':
          return 'bg-red-400';
        default:
          return 'bg-gray-400';
      }
    },
    chipClasses: function chipClasses() {
      return this.isActive ? 'bg-gray-100' : '';
    },
    textClasses: function textClasses() {
      return this.isActive ? 'text-gray-800' : 'text-gray-400';
    },
    borderClasses: function borderClasses() {
      switch (this.status) {
        case 'success':
          return 'border-green-400';
        case 'warning':
          return 'border-purple-400';
        case 'caution':
          return 'border-yellow-400';
        case 'danger':
          return 'border-red-400';
        default:
          return 'border-gray-400';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EmptyStudentCard",
  props: {
    title: {
      type: String,
      "default": "No Data Found"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Buttons_QuestionChip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Buttons/QuestionChip */ "./resources/js/Components/Buttons/QuestionChip.vue");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/index.js");
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ExamResultQuestionChip',
  components: {
    QuestionChip: _Components_Buttons_QuestionChip__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  directives: {
    'tooltip': primevue_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    sno: Number,
    active: Boolean,
    is_correct: Boolean,
    status: String
  },
  computed: {
    questionStatus: function questionStatus() {
      if (this.status === 'answered' || this.status === 'answered_mark_for_review') {
        return this.is_correct ? 'Correct Answer' : 'Wrong Answer';
      } else {
        return 'Not Answered';
      }
    },
    chipStatus: function chipStatus() {
      if (this.status === 'answered' || this.status === 'answered_mark_for_review') {
        return this.is_correct ? 'success' : 'danger';
      } else {
        return 'default';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Questions_Attachments_AudioAttachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Questions/Attachments/AudioAttachment */ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue");
/* harmony import */ var _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Questions/Attachments/VideoAttachment */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue");
/* harmony import */ var _Components_Questions_Attachments_ComprehensionAttachment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Questions/Attachments/ComprehensionAttachment */ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PracticeQuestionCard',
  components: {
    AudioAttachment: _Components_Questions_Attachments_AudioAttachment__WEBPACK_IMPORTED_MODULE_0__["default"],
    VideoAttachment: _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_1__["default"],
    ComprehensionAttachment: _Components_Questions_Attachments_ComprehensionAttachment__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    question: Object,
    sno: Number,
    totalQuestions: Number,
    attachmentType: String,
    attachment: [String, Object]
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Questions/Attachments/VideoAttachment */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue");
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PracticeSolutionCard',
  components: {
    VideoAttachment: _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    question: Object
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    align: {
      "default": 'right'
    },
    width: {
      "default": '48'
    },
    contentClasses: {
      "default": function _default() {
        return ['py-1', 'bg-white'];
      }
    }
  },
  data: function data() {
    return {
      open: false
    };
  },
  created: function created() {
    var _this = this;
    var closeOnEscape = function closeOnEscape(e) {
      if (_this.open && e.keyCode === 27) {
        _this.open = false;
      }
    };
    this.$once('hook:destroyed', function () {
      document.removeEventListener('keydown', closeOnEscape);
    });
    document.addEventListener('keydown', closeOnEscape);
  },
  computed: {
    widthClass: function widthClass() {
      return {
        '48': 'w-48'
      }[this.width.toString()];
    },
    alignmentClasses: function alignmentClasses() {
      if (this.align === 'left') {
        return 'origin-top-left left-0';
      } else if (this.align === 'right') {
        return 'rtl:origin-top-left rtl:left-0 ltr:origin-top-right ltr:right-0';
      } else {
        return 'origin-top';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['href', 'as']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['href', 'active'],
  computed: {
    classes: function classes() {
      return this.active ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out' : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plyr */ "./node_modules/vue-plyr/dist/vue-plyr.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AudioAttachment',
  components: {
    VuePlyr: vue_plyr__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    reference: String,
    options: Object
  },
  data: function data() {
    return {
      plyrOptions: {
        speed: {
          selected: 1,
          options: [1]
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ComprehensionAttachment',
  components: {
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbar
  },
  props: {
    passage: String
  },
  data: function data() {
    return {
      scrollbarOptions: {
        suppressScrollX: true
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plyr */ "./node_modules/vue-plyr/dist/vue-plyr.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VideoAttachment',
  components: {
    VuePlyr: vue_plyr__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    reference: String,
    options: Object,
    showMessage: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      plyrOptions: {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen'],
        speed: {
          selected: 1,
          options: [0.5, 1, 1.25]
        }
      }
    };
  },
  computed: {
    getVideoLink: function getVideoLink() {
      if (this.options.video_type === 'youtube') {
        return "https://www.youtube.com/embed/" + this.options.link + "?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";
      }
      if (this.options.video_type === 'vimeo') {
        return "https://player.vimeo.com/video/" + this.options.link + "?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media";
      }
      return "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FIBSolution',
  props: {
    parentQid: [Number, String],
    parentOptions: [String, Array, Number],
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.parentAnswer
    };
  },
  methods: {
    labelClass: function labelClass(index) {
      if (this.status === 'answered') {
        if (this.answer[index].toLowerCase() === this.correctAnswer[index].toLowerCase()) {
          return 'q-input correct';
        } else {
          return 'q-input wrong';
        }
      } else {
        return 'q-input';
      }
    }
  },
  computed: {
    answerText: function answerText() {
      var answers = this.correctAnswer.map(function (value, index) {
        return index + 1 + '. ' + value;
      }).join(', ');
      return this.__('Correct answers for the blanks are') + ' ' + answers;
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MMASolution",
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.parentAnswer
    };
  },
  methods: {
    labelClass: function labelClass(index) {
      if (this.status === 'answered') {
        if (this.answer.indexOf(index + 1) !== -1) {
          if (this.correctAnswer.indexOf(index + 1) !== -1) {
            return 'correct';
          } else {
            return 'wrong';
          }
        }
        return '';
      }
      return '';
    }
  },
  computed: {
    answerText: function answerText() {
      var answers = this.correctAnswer.sort();
      var str = answers.join(", ");
      return this.__('Correct answers are Options') + ' ' + str;
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MSASolution',
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.parentAnswer
    };
  },
  methods: {
    labelClass: function labelClass(index) {
      if (this.status === 'answered') {
        if (this.isCorrect && this.answer === index + 1) {
          return 'correct';
        }
        if (!this.isCorrect && this.answer === index + 1) {
          return 'wrong';
        }
      }
      return '';
    }
  },
  computed: {
    answerText: function answerText() {
      return this.__('Correct answer is Option') + ' ' + this.correctAnswer;
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MTFSolution',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    parentQid: [Number, String],
    parentOptions: [Array, Object],
    parentAnswer: [Array, Object],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions['matches'],
      answer: this.status === 'answered' ? this.parentAnswer : this.parentOptions['pairs']
    };
  },
  methods: {
    labelClass: function labelClass(index) {
      if (this.status === 'answered') {
        if (this.answer[index].id === this.correctAnswer[index]) {
          return 'correct';
        } else {
          return 'wrong';
        }
      } else {
        return '';
      }
    }
  },
  computed: {
    answerText: function answerText() {
      var _this = this;
      var answers = [];
      this.correctAnswer.forEach(function (item, index) {
        var obj = _this.answer.find(function (o) {
          return o.id === item;
        });
        answers.push(index + 1 + " - " + obj.code);
      });
      var str = answers.join(", ");
      return this.__('Correct answers are') + ' ' + str;
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ORDSolution',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.status === 'answered' ? this.parentAnswer : this.parentOptions
    };
  },
  methods: {
    labelClass: function labelClass(index) {
      if (this.status === 'answered') {
        if (this.answer[index].id === this.correctAnswer[index]) {
          return 'correct';
        } else {
          return 'wrong';
        }
      } else {
        return '';
      }
    }
  },
  computed: {
    answerText: function answerText() {
      var _this = this;
      var answers = [];
      this.correctAnswer.forEach(function (item, index) {
        var obj = _this.answer.find(function (o) {
          return o.id === item;
        });
        answers.push(index + 1 + " - " + obj.code);
      });
      var str = answers.join(", ");
      return this.__('Correct answers are') + ' ' + str;
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SAQSolution',
  props: {
    parentQid: [Number, String],
    parentOptions: [String, Array, Number],
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.parentAnswer
    };
  },
  methods: {
    labelClass: function labelClass() {
      if (this.status === 'answered') {
        if (this.isCorrect) {
          return 'q-input correct';
        } else {
          return 'q-input wrong';
        }
      } else {
        return 'q-input';
      }
    }
  },
  computed: {
    answerText: function answerText() {
      var answers = this.correctAnswer.sort();
      var str = answers.join(", ");
      return this.__('Acceptable answers are') + ' ' + str;
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['active', 'href', 'as'],
  computed: {
    classes: function classes() {
      return this.active ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out' : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RewardBadge',
  props: {
    points: {
      type: [Number, String],
      "default": 0
    },
    textColor: {
      type: String,
      "default": 'text-gray-400'
    },
    iconSize: {
      type: String,
      "default": 'w-7 h-7'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/skeleton */ "./node_modules/primevue/skeleton/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavigationQuestionCardShimmer',
  components: {
    Skeleton: primevue_skeleton__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/skeleton */ "./node_modules/primevue/skeleton/index.js");
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PracticeQuestionShimmer",
  components: {
    Skeleton: primevue_skeleton__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SideBarNav.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SideBarNav.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SideBarNav",
  props: {
    isMobile: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProgressNavigator",
  props: {
    steps: Array
  },
  data: function data() {
    return {
      open: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ApplicationMark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/ApplicationMark */ "./resources/js/Components/ApplicationMark.vue");
/* harmony import */ var _Components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Banner */ "./resources/js/Components/Banner.vue");
/* harmony import */ var _Components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Dropdown */ "./resources/js/Components/Dropdown.vue");
/* harmony import */ var _Components_DropdownLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/DropdownLink */ "./resources/js/Components/DropdownLink.vue");
/* harmony import */ var _Components_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/NavLink */ "./resources/js/Components/NavLink.vue");
/* harmony import */ var _Components_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/ResponsiveNavLink */ "./resources/js/Components/ResponsiveNavLink.vue");
/* harmony import */ var primevue_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/toast */ "./node_modules/primevue/toast/index.js");
/* harmony import */ var _Components_RewardsBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/RewardsBadge */ "./resources/js/Components/RewardsBadge.vue");
/* harmony import */ var primevue_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primevue/message */ "./node_modules/primevue/message/index.js");
/* harmony import */ var _Components_SideBarNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/SideBarNav */ "./resources/js/Components/SideBarNav.vue");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ArcApplicationMark: _Components_ApplicationMark__WEBPACK_IMPORTED_MODULE_0__["default"],
    ArcBanner: _Components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"],
    ArcDropdown: _Components_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"],
    ArcDropdownLink: _Components_DropdownLink__WEBPACK_IMPORTED_MODULE_3__["default"],
    ArcNavLink: _Components_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"],
    ArcResponsiveNavLink: _Components_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_5__["default"],
    Toast: primevue_toast__WEBPACK_IMPORTED_MODULE_6__["default"],
    Message: primevue_message__WEBPACK_IMPORTED_MODULE_8__["default"],
    RewardsBadge: _Components_RewardsBadge__WEBPACK_IMPORTED_MODULE_7__["default"],
    SideBarNav: _Components_SideBarNav__WEBPACK_IMPORTED_MODULE_9__["default"],
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbar
  },
  props: {
    canLogin: Boolean,
    canRegister: Boolean
  },
  data: function data() {
    return {
      showingNavigationDropdown: false,
      sidebar: false,
      scrollbarOptions: {
        swipeEasing: true,
        suppressScrollX: true,
        maxScrollbarLength: 100
      }
    };
  },
  methods: {
    switchToTeam: function switchToTeam(team) {
      this.$inertia.put(route('current-team.update'), {
        'team_id': team.id
      }, {
        preserveState: false
      });
    },
    toggleMenu: function toggleMenu(flag) {
      var value = document.getElementById("menu");
      if (flag) {
        value.classList.remove("hidden");
      } else {
        value.classList.add("hidden");
      }
    },
    logout: function logout() {
      this.$inertia.post(route('logout'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/QuizSolutions.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/QuizSolutions.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/AppLayout */ "./resources/js/Layouts/AppLayout.vue");
/* harmony import */ var _Components_RewardsBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/RewardsBadge */ "./resources/js/Components/RewardsBadge.vue");
/* harmony import */ var _Components_Questions_Solutions_MSASolution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Questions/Solutions/MSASolution */ "./resources/js/Components/Questions/Solutions/MSASolution.vue");
/* harmony import */ var _Components_Cards_PracticeQuestionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Cards/PracticeQuestionCard */ "./resources/js/Components/Cards/PracticeQuestionCard.vue");
/* harmony import */ var _Components_Cards_ExamResultQuestionChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Cards/ExamResultQuestionChip */ "./resources/js/Components/Cards/ExamResultQuestionChip.vue");
/* harmony import */ var _Components_Shimmers_NavigationQuestionCardShimmer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Shimmers/NavigationQuestionCardShimmer */ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue");
/* harmony import */ var _Components_Shimmers_PracticeQuestionShimmer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Shimmers/PracticeQuestionShimmer */ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue");
/* harmony import */ var _Components_Cards_PracticeSolutionCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Cards/PracticeSolutionCard */ "./resources/js/Components/Cards/PracticeSolutionCard.vue");
/* harmony import */ var _Components_Questions_Solutions_MMASolution__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Questions/Solutions/MMASolution */ "./resources/js/Components/Questions/Solutions/MMASolution.vue");
/* harmony import */ var _Components_Questions_Solutions_MTFSolution__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Questions/Solutions/MTFSolution */ "./resources/js/Components/Questions/Solutions/MTFSolution.vue");
/* harmony import */ var _Components_Questions_Solutions_ORDSolution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/Questions/Solutions/ORDSolution */ "./resources/js/Components/Questions/Solutions/ORDSolution.vue");
/* harmony import */ var _Components_Questions_Solutions_FIBSolution__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Components/Questions/Solutions/FIBSolution */ "./resources/js/Components/Questions/Solutions/FIBSolution.vue");
/* harmony import */ var _Components_Questions_Solutions_SAQSolution__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Components/Questions/Solutions/SAQSolution */ "./resources/js/Components/Questions/Solutions/SAQSolution.vue");
/* harmony import */ var _Components_BackButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/Components/BackButton */ "./resources/js/Components/BackButton.vue");
/* harmony import */ var _Components_Stepper_ProgressNavigator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/Components/Stepper/ProgressNavigator */ "./resources/js/Components/Stepper/ProgressNavigator.vue");
/* harmony import */ var _Components_Cards_EmptyStudentCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/Components/Cards/EmptyStudentCard */ "./resources/js/Components/Cards/EmptyStudentCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SAQSolution: _Components_Questions_Solutions_SAQSolution__WEBPACK_IMPORTED_MODULE_12__["default"],
    FIBSolution: _Components_Questions_Solutions_FIBSolution__WEBPACK_IMPORTED_MODULE_11__["default"],
    ORDSolution: _Components_Questions_Solutions_ORDSolution__WEBPACK_IMPORTED_MODULE_10__["default"],
    MTFSolution: _Components_Questions_Solutions_MTFSolution__WEBPACK_IMPORTED_MODULE_9__["default"],
    MSASolution: _Components_Questions_Solutions_MSASolution__WEBPACK_IMPORTED_MODULE_2__["default"],
    MMASolution: _Components_Questions_Solutions_MMASolution__WEBPACK_IMPORTED_MODULE_8__["default"],
    AppLayout: _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    RewardsBadge: _Components_RewardsBadge__WEBPACK_IMPORTED_MODULE_1__["default"],
    PracticeQuestionCard: _Components_Cards_PracticeQuestionCard__WEBPACK_IMPORTED_MODULE_3__["default"],
    ExamResultQuestionChip: _Components_Cards_ExamResultQuestionChip__WEBPACK_IMPORTED_MODULE_4__["default"],
    NavigationQuestionCardShimmer: _Components_Shimmers_NavigationQuestionCardShimmer__WEBPACK_IMPORTED_MODULE_5__["default"],
    PracticeQuestionShimmer: _Components_Shimmers_PracticeQuestionShimmer__WEBPACK_IMPORTED_MODULE_6__["default"],
    PracticeSolutionCard: _Components_Cards_PracticeSolutionCard__WEBPACK_IMPORTED_MODULE_7__["default"],
    BackButton: _Components_BackButton__WEBPACK_IMPORTED_MODULE_13__["default"],
    ProgressNavigator: _Components_Stepper_ProgressNavigator__WEBPACK_IMPORTED_MODULE_14__["default"],
    EmptyStudentCard: _Components_Cards_EmptyStudentCard__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  props: {
    quiz: Object,
    session: Object,
    steps: Array
  },
  data: function data() {
    return {
      loading: false,
      questions: [],
      current_question: 0
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  methods: {
    jumpToQuestion: function jumpToQuestion(questionID) {
      this.current_question = questionID;
    },
    fetchQuestions: function fetchQuestions() {
      var _this = this;
      _this.loading = true;
      axios.get(route('fetch_quiz_solutions', {
        quiz: this.quiz.slug,
        session: this.session.code
      })).then(function (response) {
        var data = response.data;
        _this.questions = data.questions;
      })["catch"](function (error) {
        _this.loading = false;
      }).then(function () {
        _this.loading = false;
      });
    }
  },
  computed: {
    title: function title() {
      return this.quiz.title + ' ' + this.__('Solutions') + ' - ' + this.$page.props.general.app_name;
    }
  },
  mounted: function mounted() {
    if (!this.quiz.settings.hide_solutions) {
      this.fetchQuestions();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.q-chip[data-v-47b50bea] {\n    width: 40px;\n    height: 40px;\n}\n.q-chip-sno[data-v-47b50bea] {\n    width: 40px;\n    height: 30px;\n}\n.q-chip-status[data-v-47b50bea] {\n    width: 40px;\n    height: 10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/ApplicationMark.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/ApplicationMark.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationMark.vue?vue&type=template&id=5ec8eb7c& */ "./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/ApplicationMark.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/BackButton.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/BackButton.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackButton_vue_vue_type_template_id_c4c111f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton.vue?vue&type=template&id=c4c111f8& */ "./resources/js/Components/BackButton.vue?vue&type=template&id=c4c111f8&");
/* harmony import */ var _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackButton.vue?vue&type=script&lang=js& */ "./resources/js/Components/BackButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackButton_vue_vue_type_template_id_c4c111f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _BackButton_vue_vue_type_template_id_c4c111f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/BackButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Banner.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Banner.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.vue?vue&type=template&id=ac39f192& */ "./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192&");
/* harmony import */ var _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.vue?vue&type=script&lang=js& */ "./resources/js/Components/Banner.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__.render,
  _Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Banner.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true& */ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true&");
/* harmony import */ var _QuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionChip.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js&");
/* harmony import */ var _QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& */ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47b50bea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/QuestionChip.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/EmptyStudentCard.vue":
/*!************************************************************!*\
  !*** ./resources/js/Components/Cards/EmptyStudentCard.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmptyStudentCard_vue_vue_type_template_id_1444e0b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyStudentCard.vue?vue&type=template&id=1444e0b5& */ "./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=template&id=1444e0b5&");
/* harmony import */ var _EmptyStudentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyStudentCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmptyStudentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmptyStudentCard_vue_vue_type_template_id_1444e0b5___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmptyStudentCard_vue_vue_type_template_id_1444e0b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/EmptyStudentCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/ExamResultQuestionChip.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Components/Cards/ExamResultQuestionChip.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExamResultQuestionChip_vue_vue_type_template_id_356834b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamResultQuestionChip.vue?vue&type=template&id=356834b6& */ "./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=template&id=356834b6&");
/* harmony import */ var _ExamResultQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamResultQuestionChip.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExamResultQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExamResultQuestionChip_vue_vue_type_template_id_356834b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExamResultQuestionChip_vue_vue_type_template_id_356834b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/ExamResultQuestionChip.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionCard.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionCard.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeQuestionCard.vue?vue&type=template&id=f3e42f70& */ "./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70&");
/* harmony import */ var _PracticeQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeQuestionCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/PracticeQuestionCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeSolutionCard.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeSolutionCard.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeSolutionCard.vue?vue&type=template&id=3823b6db& */ "./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db&");
/* harmony import */ var _PracticeSolutionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeSolutionCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeSolutionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/PracticeSolutionCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Dropdown.vue":
/*!**********************************************!*\
  !*** ./resources/js/Components/Dropdown.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=4210c0dc& */ "./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Dropdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/DropdownLink.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/DropdownLink.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownLink.vue?vue&type=template&id=6e0ef414& */ "./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414&");
/* harmony import */ var _DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__.render,
  _DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/DropdownLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/NavLink.vue":
/*!*********************************************!*\
  !*** ./resources/js/Components/NavLink.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue?vue&type=template&id=337232c2& */ "./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2&");
/* harmony import */ var _NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/NavLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/NavLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/AudioAttachment.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioAttachment.vue?vue&type=template&id=080677fd& */ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd&");
/* harmony import */ var _AudioAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioAttachment.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AudioAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__.render,
  _AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Attachments/AudioAttachment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b& */ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b&");
/* harmony import */ var _ComprehensionAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComprehensionAttachment.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComprehensionAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__.render,
  _ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/VideoAttachment.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoAttachment.vue?vue&type=template&id=29e26be2& */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2&");
/* harmony import */ var _VideoAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoAttachment.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideoAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__.render,
  _VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Attachments/VideoAttachment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/FIBSolution.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/FIBSolution.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FIBSolution_vue_vue_type_template_id_aec626b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FIBSolution.vue?vue&type=template&id=aec626b4& */ "./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=template&id=aec626b4&");
/* harmony import */ var _FIBSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FIBSolution.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FIBSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FIBSolution_vue_vue_type_template_id_aec626b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _FIBSolution_vue_vue_type_template_id_aec626b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Solutions/FIBSolution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MMASolution.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MMASolution.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MMASolution_vue_vue_type_template_id_92de1730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MMASolution.vue?vue&type=template&id=92de1730& */ "./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=template&id=92de1730&");
/* harmony import */ var _MMASolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MMASolution.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MMASolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MMASolution_vue_vue_type_template_id_92de1730___WEBPACK_IMPORTED_MODULE_0__.render,
  _MMASolution_vue_vue_type_template_id_92de1730___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Solutions/MMASolution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MSASolution.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MSASolution.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MSASolution_vue_vue_type_template_id_01c3ae22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MSASolution.vue?vue&type=template&id=01c3ae22& */ "./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=template&id=01c3ae22&");
/* harmony import */ var _MSASolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MSASolution.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MSASolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MSASolution_vue_vue_type_template_id_01c3ae22___WEBPACK_IMPORTED_MODULE_0__.render,
  _MSASolution_vue_vue_type_template_id_01c3ae22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Solutions/MSASolution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MTFSolution.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MTFSolution.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MTFSolution_vue_vue_type_template_id_e79ecf74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MTFSolution.vue?vue&type=template&id=e79ecf74& */ "./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=template&id=e79ecf74&");
/* harmony import */ var _MTFSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MTFSolution.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MTFSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MTFSolution_vue_vue_type_template_id_e79ecf74___WEBPACK_IMPORTED_MODULE_0__.render,
  _MTFSolution_vue_vue_type_template_id_e79ecf74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Solutions/MTFSolution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/ORDSolution.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/ORDSolution.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ORDSolution_vue_vue_type_template_id_c1b466f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ORDSolution.vue?vue&type=template&id=c1b466f0& */ "./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=template&id=c1b466f0&");
/* harmony import */ var _ORDSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ORDSolution.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ORDSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ORDSolution_vue_vue_type_template_id_c1b466f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _ORDSolution_vue_vue_type_template_id_c1b466f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Solutions/ORDSolution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/SAQSolution.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/SAQSolution.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SAQSolution_vue_vue_type_template_id_2380668a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SAQSolution.vue?vue&type=template&id=2380668a& */ "./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=template&id=2380668a&");
/* harmony import */ var _SAQSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SAQSolution.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SAQSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SAQSolution_vue_vue_type_template_id_2380668a___WEBPACK_IMPORTED_MODULE_0__.render,
  _SAQSolution_vue_vue_type_template_id_2380668a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Solutions/SAQSolution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/ResponsiveNavLink.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/ResponsiveNavLink.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveNavLink.vue?vue&type=template&id=9d824fa4& */ "./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4&");
/* harmony import */ var _ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveNavLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/ResponsiveNavLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/RewardsBadge.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/RewardsBadge.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RewardsBadge.vue?vue&type=template&id=648681ac& */ "./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac&");
/* harmony import */ var _RewardsBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RewardsBadge.vue?vue&type=script&lang=js& */ "./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RewardsBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/RewardsBadge.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485& */ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485&");
/* harmony import */ var _NavigationQuestionCardShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationQuestionCardShimmer.vue?vue&type=script&lang=js& */ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationQuestionCardShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae& */ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae&");
/* harmony import */ var _PracticeQuestionShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeQuestionShimmer.vue?vue&type=script&lang=js& */ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeQuestionShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Shimmers/PracticeQuestionShimmer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/SideBarNav.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/SideBarNav.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideBarNav_vue_vue_type_template_id_450c9552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBarNav.vue?vue&type=template&id=450c9552& */ "./resources/js/Components/SideBarNav.vue?vue&type=template&id=450c9552&");
/* harmony import */ var _SideBarNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBarNav.vue?vue&type=script&lang=js& */ "./resources/js/Components/SideBarNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideBarNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBarNav_vue_vue_type_template_id_450c9552___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideBarNav_vue_vue_type_template_id_450c9552___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/SideBarNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Stepper/ProgressNavigator.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Components/Stepper/ProgressNavigator.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProgressNavigator_vue_vue_type_template_id_006af111___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressNavigator.vue?vue&type=template&id=006af111& */ "./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=template&id=006af111&");
/* harmony import */ var _ProgressNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressNavigator.vue?vue&type=script&lang=js& */ "./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProgressNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressNavigator_vue_vue_type_template_id_006af111___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProgressNavigator_vue_vue_type_template_id_006af111___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Stepper/ProgressNavigator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue":
/*!********************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=5663af57& */ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/AppLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/QuizSolutions.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/User/QuizSolutions.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizSolutions_vue_vue_type_template_id_28201cca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizSolutions.vue?vue&type=template&id=28201cca& */ "./resources/js/Pages/User/QuizSolutions.vue?vue&type=template&id=28201cca&");
/* harmony import */ var _QuizSolutions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizSolutions.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/QuizSolutions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuizSolutions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizSolutions_vue_vue_type_template_id_28201cca___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuizSolutions_vue_vue_type_template_id_28201cca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/QuizSolutions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/BackButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/BackButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/BackButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Banner.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Banner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyStudentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyStudentCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyStudentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamResultQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamResultQuestionChip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamResultQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeSolutionCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Components/Dropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/NavLink.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/NavLink.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudioAttachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprehensionAttachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoAttachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FIBSolution.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MMASolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MMASolution.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MMASolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MSASolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MSASolution.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MSASolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MTFSolution.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ORDSolution.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SAQSolution.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQSolution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResponsiveNavLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RewardsBadge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationQuestionCardShimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionShimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/SideBarNav.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/SideBarNav.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBarNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SideBarNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProgressNavigator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/QuizSolutions.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/User/QuizSolutions.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizSolutions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizSolutions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/QuizSolutions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizSolutions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c&":
/*!************************************************************************************!*\
  !*** ./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApplicationMark.vue?vue&type=template&id=5ec8eb7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c&");


/***/ }),

/***/ "./resources/js/Components/BackButton.vue?vue&type=template&id=c4c111f8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/BackButton.vue?vue&type=template&id=c4c111f8& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_c4c111f8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_c4c111f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_c4c111f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackButton.vue?vue&type=template&id=c4c111f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/BackButton.vue?vue&type=template&id=c4c111f8&");


/***/ }),

/***/ "./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Banner.vue?vue&type=template&id=ac39f192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192&");


/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=template&id=1444e0b5&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=template&id=1444e0b5& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyStudentCard_vue_vue_type_template_id_1444e0b5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyStudentCard_vue_vue_type_template_id_1444e0b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyStudentCard_vue_vue_type_template_id_1444e0b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmptyStudentCard.vue?vue&type=template&id=1444e0b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=template&id=1444e0b5&");


/***/ }),

/***/ "./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=template&id=356834b6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=template&id=356834b6& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamResultQuestionChip_vue_vue_type_template_id_356834b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamResultQuestionChip_vue_vue_type_template_id_356834b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamResultQuestionChip_vue_vue_type_template_id_356834b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamResultQuestionChip.vue?vue&type=template&id=356834b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=template&id=356834b6&");


/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionCard.vue?vue&type=template&id=f3e42f70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70&");


/***/ }),

/***/ "./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeSolutionCard.vue?vue&type=template&id=3823b6db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db&");


/***/ }),

/***/ "./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=template&id=4210c0dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&");


/***/ }),

/***/ "./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownLink.vue?vue&type=template&id=6e0ef414& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414&");


/***/ }),

/***/ "./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavLink.vue?vue&type=template&id=337232c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2&");


/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudioAttachment.vue?vue&type=template&id=080677fd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd&");


/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b&");


/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoAttachment.vue?vue&type=template&id=29e26be2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2&");


/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=template&id=aec626b4&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=template&id=aec626b4& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBSolution_vue_vue_type_template_id_aec626b4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBSolution_vue_vue_type_template_id_aec626b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBSolution_vue_vue_type_template_id_aec626b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FIBSolution.vue?vue&type=template&id=aec626b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=template&id=aec626b4&");


/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=template&id=92de1730&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=template&id=92de1730& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMASolution_vue_vue_type_template_id_92de1730___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMASolution_vue_vue_type_template_id_92de1730___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMASolution_vue_vue_type_template_id_92de1730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MMASolution.vue?vue&type=template&id=92de1730& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=template&id=92de1730&");


/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=template&id=01c3ae22&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=template&id=01c3ae22& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSASolution_vue_vue_type_template_id_01c3ae22___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSASolution_vue_vue_type_template_id_01c3ae22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSASolution_vue_vue_type_template_id_01c3ae22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MSASolution.vue?vue&type=template&id=01c3ae22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=template&id=01c3ae22&");


/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=template&id=e79ecf74&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=template&id=e79ecf74& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFSolution_vue_vue_type_template_id_e79ecf74___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFSolution_vue_vue_type_template_id_e79ecf74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFSolution_vue_vue_type_template_id_e79ecf74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MTFSolution.vue?vue&type=template&id=e79ecf74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=template&id=e79ecf74&");


/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=template&id=c1b466f0&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=template&id=c1b466f0& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDSolution_vue_vue_type_template_id_c1b466f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDSolution_vue_vue_type_template_id_c1b466f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDSolution_vue_vue_type_template_id_c1b466f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ORDSolution.vue?vue&type=template&id=c1b466f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=template&id=c1b466f0&");


/***/ }),

/***/ "./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=template&id=2380668a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=template&id=2380668a& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQSolution_vue_vue_type_template_id_2380668a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQSolution_vue_vue_type_template_id_2380668a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQSolution_vue_vue_type_template_id_2380668a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SAQSolution.vue?vue&type=template&id=2380668a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=template&id=2380668a&");


/***/ }),

/***/ "./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResponsiveNavLink.vue?vue&type=template&id=9d824fa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4&");


/***/ }),

/***/ "./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RewardsBadge.vue?vue&type=template&id=648681ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac&");


/***/ }),

/***/ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485&");


/***/ }),

/***/ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae&");


/***/ }),

/***/ "./resources/js/Components/SideBarNav.vue?vue&type=template&id=450c9552&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/SideBarNav.vue?vue&type=template&id=450c9552& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarNav_vue_vue_type_template_id_450c9552___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarNav_vue_vue_type_template_id_450c9552___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarNav_vue_vue_type_template_id_450c9552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBarNav.vue?vue&type=template&id=450c9552& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SideBarNav.vue?vue&type=template&id=450c9552&");


/***/ }),

/***/ "./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=template&id=006af111&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=template&id=006af111& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressNavigator_vue_vue_type_template_id_006af111___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressNavigator_vue_vue_type_template_id_006af111___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressNavigator_vue_vue_type_template_id_006af111___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProgressNavigator.vue?vue&type=template&id=006af111& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=template&id=006af111&");


/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&":
/*!***************************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=template&id=5663af57& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&");


/***/ }),

/***/ "./resources/js/Pages/User/QuizSolutions.vue?vue&type=template&id=28201cca&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/User/QuizSolutions.vue?vue&type=template&id=28201cca& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizSolutions_vue_vue_type_template_id_28201cca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizSolutions_vue_vue_type_template_id_28201cca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizSolutions_vue_vue_type_template_id_28201cca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizSolutions.vue?vue&type=template&id=28201cca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/QuizSolutions.vue?vue&type=template&id=28201cca&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        viewBox: "0 0 50 50",
      },
    },
    [
      _c("g", { attrs: { id: "Icon", transform: "translate(13 344)" } }, [
        _c(
          "g",
          { attrs: { id: "circle", transform: "translate(-29 -361.14)" } },
          [
            _c("circle", {
              attrs: {
                id: "bg_circle",
                cx: "25",
                cy: "25",
                r: "25",
                transform: "translate(16 17.14)",
                fill: "#25c16f",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                id: "white_ring",
                d: "M20,0A19.969,19.969,0,0,1,37.151,30.248c-.712,1.229-2.946,1.654-4.181,2.926-1.2,1.235-1.426,3.291-3.258,4.338A20.011,20.011,0,1,1,20,0Z",
                transform: "translate(21 22.14)",
                fill: "#fff",
              },
            }),
            _vm._v(" "),
            _c("circle", {
              attrs: {
                id: "green_ring",
                cx: "15",
                cy: "15",
                r: "15",
                transform: "translate(26 27.14)",
                fill: "#25c16f",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c(
          "g",
          {
            attrs: {
              id: "cursor",
              transform: "matrix(1, -0.017, 0.017, 1, 10.797, -319.593)",
            },
          },
          [
            _c("path", {
              attrs: {
                id: "right",
                d: "M10.286,23.465a.687.687,0,0,1-.63-.413L.057.962a.687.687,0,0,1,.9-.9l22.09,9.6a.687.687,0,0,1-.073,1.288L16.249,13A4.885,4.885,0,0,0,13,16.249l-2.058,6.73a.687.687,0,0,1-.619.485Z",
                transform: "translate(0 0)",
                fill: "#fff",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                id: "left",
                d: "M27.244,9.657,5.154.058A.688.688,0,0,0,4.394.2h0L18.412,14.221A4.887,4.887,0,0,1,20.441,13l6.73-2.058a.687.687,0,0,0,.073-1.288Z",
                transform: "translate(-4.192 -0.001)",
                fill: "#fff",
              },
            }),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/BackButton.vue?vue&type=template&id=c4c111f8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/BackButton.vue?vue&type=template&id=c4c111f8& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass:
        "text-gray-400 flex ltr:flex-row rtl:flex-row-reverse items-center ltr:mr-4 rtl:ml-4 focus:outline-none",
      on: { click: _vm.goBack },
    },
    [
      _c(
        "svg",
        {
          staticClass: "w-6 h-6 rtl:flip",
          attrs: {
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
          },
        },
        [
          _c("path", {
            attrs: {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M10 19l-7-7m0 0l7-7m-7 7h18",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _vm._t("default"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.show && _vm.message
      ? _c(
          "div",
          {
            class: {
              "bg-indigo-500": _vm.style == "success",
              "bg-red-700": _vm.style == "danger",
            },
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center justify-between flex-wrap",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "w-0 flex-1 flex items-center min-w-0" },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "flex p-2 rounded-md",
                            class: {
                              "bg-indigo-600": _vm.style == "success",
                              "bg-red-600": _vm.style == "danger",
                            },
                          },
                          [
                            _vm.style == "success"
                              ? _c(
                                  "svg",
                                  {
                                    staticClass: "h-5 w-5 text-white",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                      },
                                    }),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.style == "danger"
                              ? _c(
                                  "svg",
                                  {
                                    staticClass: "h-5 w-5 text-white",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                                      },
                                    }),
                                  ]
                                )
                              : _vm._e(),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "ml-3 font-medium text-white truncate",
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.message) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-shrink-0 sm:ml-3" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",
                          class: {
                            "hover:bg-indigo-600 focus:bg-indigo-600":
                              _vm.style == "success",
                            "hover:bg-red-600 focus:bg-red-600":
                              _vm.style == "danger",
                          },
                          attrs: { type: "button", "aria-label": "Dismiss" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              _vm.show = false
                            },
                          },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "h-5 w-5 text-white",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]
            ),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "q-chip relative text-sm flex flex-col items-center justify-between border border-b-0 rounded-sm",
      class: [_vm.chipClasses, _vm.borderClasses],
    },
    [
      _c(
        "span",
        {
          staticClass: "q-chip-sno flex justify-center items-center",
          class: [_vm.textClasses],
        },
        [_vm._v(_vm._s(_vm.sno))]
      ),
      _vm._v(" "),
      _c("span", {
        staticClass:
          "q-chip-status overflow-hidden text-white absolute bottom-0 h-3 rounded-bl-sm rounded-br-sm",
        class: [_vm.statusClasses, _vm.borderClasses],
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=template&id=1444e0b5&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/EmptyStudentCard.vue?vue&type=template&id=1444e0b5& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "flex flex-col items-center justify-center gap-4 text-gray-600",
    },
    [
      _c(
        "svg",
        {
          staticClass: "w-40 h-40",
          attrs: {
            "data-name": "Layer 1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "0 0 998.95 833.99",
          },
        },
        [
          _c(
            "defs",
            [
              _c(
                "linearGradient",
                {
                  attrs: {
                    id: "8849c9b4-5ff8-40d0-8d32-f1e3227b06d9",
                    x1: "499.14",
                    y1: "857.42",
                    x2: "499.14",
                    y2: "171.42",
                    gradientUnits: "userSpaceOnUse",
                  },
                },
                [
                  _c("stop", {
                    attrs: {
                      offset: "0",
                      "stop-color": "gray",
                      "stop-opacity": "0.25",
                    },
                  }),
                  _c("stop", {
                    attrs: {
                      offset: "0.54",
                      "stop-color": "gray",
                      "stop-opacity": "0.12",
                    },
                  }),
                  _c("stop", {
                    attrs: {
                      offset: "1",
                      "stop-color": "gray",
                      "stop-opacity": "0.1",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _c("title", [_vm._v("blank canvas")]),
          _c("path", {
            attrs: {
              d: "M424.35,62.67c29.21-26,75.06-31.33,116.8-29.26,131.09,6.52,249.42,69.8,351.78,141.39,37.06,25.91,73.54,53.84,97.59,89.53,49,72.65,34.44,173.29-33.64,233.14-23.17,20.36-51.25,36-80.08,49.81-51.26,24.6-106.57,44.35-164.75,50-41.48,4-83.48.75-124.73-4.84C472.09,576.78,359,542.22,264.17,483.1,222.59,457.17,183.4,424.93,166.26,383S160.09,287.87,202.55,263c17.56-10.27,38.56-14.91,59.11-19.27,30.26-6.41,61-12.73,88.3-25.76,28.21-13.46,61.6-39.49,56-69.29C400,116.75,395.18,88.67,424.35,62.67Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M785.47,701.9s25.06-44.39,62.79-57.18a77.24,77.24,0,0,0,39.12-29.26,129.52,129.52,0,0,0,11.54-20.76",
              transform: "translate(-100.52 -33.01)",
              fill: "none",
              stroke: "#535461",
              "stroke-miterlimit": "10",
              "stroke-width": "2",
            },
          }),
          _c("path", {
            attrs: {
              d: "M922.66,586.49c-4.3,4.18-24.33,8.49-24.33,8.49s4.91-19.89,9.21-24.06a10.85,10.85,0,0,1,15.12,15.57Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M911.33,622.48c-5.88,1.17-25-6.09-25-6.09s14.94-14,20.81-15.2a10.85,10.85,0,0,1,4.23,21.29Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M870.08,661.42c-5.67-2-18.54-17.9-18.54-17.9s20-4.56,25.64-2.6a10.85,10.85,0,1,1-7.1,20.5Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M832.23,683.86c-5.91-1-21.29-14.51-21.29-14.51s18.91-7.88,24.82-6.9a10.85,10.85,0,1,1-3.53,21.41Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M869.59,600.85c0,6,10.84,23.37,10.84,23.37s10.86-17.37,10.86-23.36a10.85,10.85,0,1,0-21.7,0Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M825.66,627.65c1.8,5.72,17.34,19.06,17.34,19.06s5.16-19.83,3.37-25.55a10.85,10.85,0,0,0-20.71,6.49Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M786.54,659.55c.8,5.94,13.87,21.72,13.87,21.72s8.44-18.67,7.64-24.61a10.85,10.85,0,0,0-21.51,2.89Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M922.66,586.49c-4.3,4.18-24.33,8.49-24.33,8.49s4.91-19.89,9.21-24.06a10.85,10.85,0,0,1,15.12,15.57Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.25",
            },
          }),
          _c("path", {
            attrs: {
              d: "M911.33,622.48c-5.88,1.17-25-6.09-25-6.09s14.94-14,20.81-15.2a10.85,10.85,0,0,1,4.23,21.29Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.25",
            },
          }),
          _c("path", {
            attrs: {
              d: "M870.08,661.42c-5.67-2-18.54-17.9-18.54-17.9s20-4.56,25.64-2.6a10.85,10.85,0,1,1-7.1,20.5Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.25",
            },
          }),
          _c("path", {
            attrs: {
              d: "M832.23,683.86c-5.91-1-21.29-14.51-21.29-14.51s18.91-7.88,24.82-6.9a10.85,10.85,0,1,1-3.53,21.41Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.25",
            },
          }),
          _c("path", {
            attrs: {
              d: "M869.59,600.85c0,6,10.84,23.37,10.84,23.37s10.86-17.37,10.86-23.36a10.85,10.85,0,1,0-21.7,0Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.25",
            },
          }),
          _c("path", {
            attrs: {
              d: "M825.66,627.65c1.8,5.72,17.34,19.06,17.34,19.06s5.16-19.83,3.37-25.55a10.85,10.85,0,0,0-20.71,6.49Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.25",
            },
          }),
          _c("path", {
            attrs: {
              d: "M786.54,659.55c.8,5.94,13.87,21.72,13.87,21.72s8.44-18.67,7.64-24.61a10.85,10.85,0,0,0-21.51,2.89Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.25",
            },
          }),
          _c("path", {
            attrs: {
              d: "M786.91,701s4.92-50.74,34.24-77.72a77.24,77.24,0,0,0,23.9-42.61A129.14,129.14,0,0,0,847.19,557",
              transform: "translate(-100.52 -33.01)",
              fill: "none",
              stroke: "#535461",
              "stroke-miterlimit": "10",
              "stroke-width": "2",
            },
          }),
          _c("path", {
            attrs: {
              d: "M865.56,539.92c-2.24,5.56-18.8,17.62-18.8,17.62s-3.56-20.18-1.32-25.73a10.85,10.85,0,1,1,20.12,8.11Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M869.79,577.41c-4.9,3.45-25.36,4.57-25.36,4.57s8-18.87,12.87-22.32a10.85,10.85,0,0,1,12.49,17.75Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M847.86,629.73c-6,.5-24.2-8.86-24.2-8.86S840.07,608.61,846,608.1a10.85,10.85,0,0,1,1.82,21.63Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M822.35,665.58c-5.8,1.5-25.34-4.64-25.34-4.64s14.09-14.87,19.89-16.37a10.85,10.85,0,1,1,5.45,21Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M822.87,574.54c2.42,5.48,19.38,17,19.38,17s2.89-20.28.46-25.76a10.85,10.85,0,0,0-19.84,8.78Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M793.57,616.85c3.95,4.5,23.57,10.4,23.57,10.4s-3.31-20.22-7.27-24.72a10.85,10.85,0,1,0-16.3,14.32Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M770.73,661.87c3.14,5.11,21.48,14.23,21.48,14.23s.15-20.48-3-25.59a10.85,10.85,0,1,0-18.49,11.36Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("ellipse", {
            attrs: {
              cx: "374.17",
              cy: "814.05",
              rx: "118.88",
              ry: "19.93",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("ellipse", {
            attrs: {
              cx: "608.16",
              cy: "661.06",
              rx: "118.88",
              ry: "19.93",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "616.05 398.03 615.94 401.92 609.18 640.44 597.82 640.44 603.39 401.92 603.5 397.43 616.05 398.03",
              fill: "#b77b7f",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "681.82 600.09 673.31 600.07 546.87 599.8 540.13 599.79 543.72 588.73 680.92 588.73 681.82 600.09",
              fill: "#dda2a6",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "616.05 398.03 615.94 401.92 603.39 401.92 603.5 397.43 616.05 398.03",
              opacity: "0.1",
            },
          }),
          _c("rect", {
            attrs: {
              x: "599.77",
              y: "392.2",
              width: "21.07",
              height: "7.93",
              fill: "#b77b7f",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "547.99 588.73 546.87 599.8 540.13 599.79 543.72 588.73 547.99 588.73",
              opacity: "0.1",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "566.14 392.05 565.79 395.49 537.74 672.13 524.89 671.52 554.45 395.49 554.78 392.35 566.14 392.05",
              fill: "#dda2a6",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "681.82 600.09 673.31 600.07 672.16 588.73 680.92 588.73 681.82 600.09",
              opacity: "0.1",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "695.27 671.52 682.41 672.13 654.37 395.49 654.02 392.05 665.37 392.35 665.7 395.49 695.27 671.52",
              fill: "#dda2a6",
            },
          }),
          _c("rect", {
            attrs: {
              x: "466.6",
              y: "119.3",
              width: "283.36",
              height: "271.7",
              fill: "#fff",
            },
          }),
          _c("path", {
            attrs: {
              d: "M714.33,61.44v65.61H703.28V61.44a5.53,5.53,0,1,1,11.05,0Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#dda2a6",
            },
          }),
          _c("rect", {
            attrs: {
              x: "602.75",
              y: "88.07",
              width: "11.06",
              height: "5.97",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M718.67,125.56v21.66H699V125.56a2.68,2.68,0,0,1,2.69-2.69H716A2.69,2.69,0,0,1,718.67,125.56Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#dda2a6",
            },
          }),
          _c("circle", {
            attrs: { cx: "608.28", cy: "103.61", r: "4.18", opacity: "0.1" },
          }),
          _c("circle", {
            attrs: { cx: "608.28", cy: "102.71", r: "4.18", fill: "#b77b7f" },
          }),
          _c("rect", {
            attrs: {
              x: "598.42",
              y: "111.53",
              width: "19.73",
              height: "2.69",
              opacity: "0.1",
            },
          }),
          _c("rect", {
            attrs: {
              x: "590.35",
              y: "115.12",
              width: "35.87",
              height: "5.98",
              opacity: "0.1",
            },
          }),
          _c("rect", {
            attrs: {
              x: "590.35",
              y: "113.32",
              width: "35.87",
              height: "5.98",
              fill: "#dda2a6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M535.72,384H686.37a6.5,6.5,0,0,1,6.5,6.5v1.42a0,0,0,0,1,0,0H529.22a0,0,0,0,1,0,0v-1.42A6.5,6.5,0,0,1,535.72,384Z",
              opacity: "0.1",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "554.78 392.35 566.14 392.05 565.79 395.49 554.45 395.49 554.78 392.35",
              opacity: "0.1",
            },
          }),
          _c("rect", {
            attrs: {
              x: "599.77",
              y: "392.2",
              width: "21.07",
              height: "3.29",
              opacity: "0.1",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "665.7 395.49 654.37 395.49 654.02 392.05 665.37 392.35 665.7 395.49",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M535.72,385.77H686.37a6.5,6.5,0,0,1,6.5,6.5v1.42a0,0,0,0,1,0,0H529.22a0,0,0,0,1,0,0v-1.42A6.5,6.5,0,0,1,535.72,385.77Z",
              fill: "#dda2a6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M603.21,292.64c-2.27-1.2-27-19.88-27-19.88l-39.91-25.31s-.21-.6-.59-1.63c10.95-12.43,8.56-30.47-2.58-43.15-13.5-15.38-74.5-48.49-92.88-20.17-2.57,4-2.66,8.54-3.33,12.94-1.57,10.27-6.63,20.22-14.57,28.6-6.12,6.47-14.15,12.43-17.67,19.75,0-.09-.07-.18-.1-.28a18.36,18.36,0,0,0-1.83,5C401,257.44,407,266,410.19,274.69a47.5,47.5,0,0,1,2.32,9.08c.08-.62.15-1.23.22-1.85a58.06,58.06,0,0,1,.79,13.36c-22.15,4.51-22.16,42.4-22.16,42.4s-2.73,15.06-2.27,20.49.45,17.17.45,20-2.73,20.48-3,22.6a.51.51,0,0,1,0,.09c-.4,2.32-4.55,13.5,5.48,16,.7.18,1.44.33,2.21.47.43,9.05,1.21,28,.52,32.22,0,0,3.65,25.46,6.68,31.93a73.44,73.44,0,0,0,6.7,10.82,11.92,11.92,0,0,1-1.54,4.39c-1.55,2.23-.75,4.06,1.84,4.85-.09.77-.19,1.64-.3,2.62-1.11,9.82-2.77,29.34.05,39.23,3.87,13.56,4.1,18.08,4.1,18.08s0,4.06,1.6,6.32,4.55,23.28,4.55,26.67,7.74,33.89,5.46,41.12-.45,17.4-.45,17.4-1.37,17.85-3,21.69-2.28,65.75.22,81.79,4.1,29.37,4.1,29.37-1.59,14.69-.23,16.72,3.87,14.24,2.05,14.91-2.73,5.65-2.73,5.65a50.39,50.39,0,0,0,3.11,4.23,17,17,0,0,1-2.05-.87c.72,1,1.8,2.42,3.13,4l-1.25,16.25a2.72,2.72,0,0,0,2,2.85,22.87,22.87,0,0,0,22.62-6.36c11.38-11.52,15.25-9.94,17.3-16.94.22-.75.41-1.49.57-2.19,1.47-6.24-5.18-10.88-10.47-8.22.73-4.94,1.3-10.55.75-13.72-1.14-6.55-.91-23.72-.91-23.72l-1.59-82.25s2.95-16.27,6.37-22.59,3-28.47,3-28.47l3.87-72.76,3.64-35.47s3.64-12.2,8.19,1.36c0,0-2.5,27.33-1.36,33.89s2.73,38.41,1.59,45.41-6.14,45.42-3,55.13S486,694.15,485.3,698s-3,87.21-3,87.21,6.15,16,1.6,21.24-.23,26-.23,26,.55.39,1.49.93l-.13,1.73-1.43,18.69a2.74,2.74,0,0,0,2,2.86,22.86,22.86,0,0,0,22.62-6.36c11.38-11.53,15.25-9.94,17.3-16.95.22-.75.41-1.48.58-2.19,1.6-6.81-6.5-11.75-11.92-7.3l-.27.23a9.41,9.41,0,0,1-.89.67,4.3,4.3,0,0,1-.45.29c1.14-5.16,2.8-14,2-18.14-1.14-6.1,1.13-24.62,1.13-24.62s6.6-22.15,6.83-31l1.82-70.49s-.22-28.7.69-35.7,8.19-67.56,15.47-85.64c5.59-13.84,8.09-49.16,6.61-67.07-.08-.88-.16-1.73-.26-2.52,8.93-6.59,9.82-17.55,9.82-17.55s-8.2-15.66-16.09-22.29S531,432,531.28,427.15a11.88,11.88,0,0,0-2.73-8.13s-3.64-11.75-6.07-12.95a1.9,1.9,0,0,1-.53-.4c-1.65-1.77-.38-6.83-.38-6.83l0-.16c.29-1.17,2-8.75,1.49-10.69-.61-2.1.3-12.05.3-12.05s5.77-17.17,4.86-30.73,11.84-12.35,11.84-12.35l39.37-.41,4.48,0a31.53,31.53,0,0,0,4.31-4.46c7.5-.89,22.67-3.72,24.37-12C614.9,305,605.49,293.85,603.21,292.64ZM420.81,418l.27-6.89c.93.8,1.55,1.31,1.55,1.31a10.78,10.78,0,0,1,.07,5.52,5.89,5.89,0,0,1-3.41,3.82,4.14,4.14,0,0,0-.55.29l-.38-3.89Zm142.8-121c-1.67-.75-7.29-.6-10.18-.6s-7.58-2.41-7.58-2.41c-1-1.95-6.53-3.11-11.45-3.77-3.74-9.22-9-18.21-9.71-27.82,0-.35,0-.7-.05-1.05l.57,1s22.92,14.62,25.5,19c2,3.34,11.63,10.8,16.09,14.14a4.59,4.59,0,0,1-2.45,1.64A1.35,1.35,0,0,1,563.61,297Z",
              transform: "translate(-100.52 -33.01)",
              fill: "url(#8849c9b4-5ff8-40d0-8d32-f1e3227b06d9)",
            },
          }),
          _c("path", {
            attrs: {
              d: "M525.76,831.22c-.17.7-.35,1.43-.57,2.17-2,7-5.83,5.38-17,16.81a22.38,22.38,0,0,1-22.27,6.32,2.7,2.7,0,0,1-2-2.84l1.41-18.54.67-8.92s17.84,5,26.92-1.35a10.77,10.77,0,0,0,.88-.67A2.75,2.75,0,0,0,514,824,7.29,7.29,0,0,1,525.76,831.22Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#67647e",
            },
          }),
          _c("path", {
            attrs: {
              d: "M469.76,824.22c-.17.7-.35,1.43-.57,2.17-2,7-5.83,5.38-17,16.81a22.38,22.38,0,0,1-22.27,6.32,2.7,2.7,0,0,1-2-2.84l1.41-18.54.67-8.92s17.84,5,26.92-1.35a10.77,10.77,0,0,0,.88-.67A2.75,2.75,0,0,0,458,817,7.29,7.29,0,0,1,469.76,824.22Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#67647e",
            },
          }),
          _c("path", {
            attrs: {
              d: "M451.33,827l.72,9.64c-10.24,10.23-22.43-5-26-10C435.44,831.48,451.33,827,451.33,827Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M511.52,830.92l1.34-.89c-9.35,14.22-23.24,7.66-27.57,5.11l.67-8.92s17.84,5,26.92-1.35C512.17,828.35,511.52,830.92,511.52,830.92Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M540,561.69c-7.18,17.93-14.35,78-15.25,85s-.67,35.42-.67,35.42L522.28,752c-.23,8.75-6.73,30.72-6.73,30.72s-2.24,18.38-1.12,24.43-2.91,22-2.91,22l1.34-.9c-11.21,17-28.92,4.26-28.92,4.26s-4.26-20.62.23-25.78-1.57-21.07-1.57-21.07,2.24-82.72,2.91-86.53-2.69-15.47-5.83-25.11,1.8-47.75,2.92-54.7-.45-38.56-1.57-45.06,1.34-33.63,1.34-33.63c-4.48-13.45-8.07-1.34-8.07-1.34l-3.59,35.19-3.81,72.19s.45,22-2.91,28.25-6.28,22.41-6.28,22.41l1.57,81.61s-.22,17,.9,23.53-2.47,23.32-2.47,23.32C445.16,855.36,425,823.3,425,823.3s.9-4.93,2.69-5.6-.67-12.78-2-14.8.22-16.59.22-16.59-1.57-13.22-4-29.14-1.79-77.34-.22-81.15,2.91-21.52,2.91-21.52-1.79-10.09.45-17.27-5.38-37.43-5.38-40.8-2.91-24.21-4.48-26.45-1.57-6.28-1.57-6.28-.22-4.48-4-17.93c-2.78-9.82-1.14-29.18-.05-38.93.39-3.61.73-5.91.73-5.91S538.87,480.08,544,484.79c1.2,1.11,2,4.92,2.47,10.35C548,512.9,545.48,548,540,561.69Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#444053",
            },
          }),
          _c("path", {
            attrs: {
              d: "M491.34,662.49c.6,0,14.8,1.2,20,.15S491.34,662.49,491.34,662.49Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M492.39,670.86S512,674.3,513,672.51,492.39,670.86,492.39,670.86Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M432.46,667.27s10.16.45,15.69,3S432.46,667.27,432.46,667.27Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M395.54,415.9s1.64,31.23.75,36.76c0,0,3.58,25.26,6.57,31.68s9.42,14.5,9.42,14.5l8.82-62L419,415.6Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#efb7b9",
            },
          }),
          _c("circle", {
            attrs: { cx: "387.68", cy: "206.09", r: "34.52", fill: "#efb7b9" },
          }),
          _c("path", {
            attrs: {
              d: "M470.27,255.23s-10.76,21.08-21.52,30.94,64.56,21.07,66.35,21.07S501.65,262.41,504.34,257,470.27,255.23,470.27,255.23Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#efb7b9",
            },
          }),
          _c("path", {
            attrs: {
              d: "M546.49,495.14a22.43,22.43,0,0,1-5.54,3.1c-13.74,5.38-28.69,12.85-38.85,9.87s-31.68,0-31.68,0-43.35-3.59-52-1.5c-3.94.95-7,.91-9,.23.39-3.61.73-5.91.73-5.91S538.87,480.08,544,484.79C545.22,485.9,546,489.71,546.49,495.14Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M555.9,475.22s-1.19,14.95-14.95,20.33-28.69,12.85-38.85,9.87-31.68,0-31.68,0-43.35-3.59-52-1.5-13.16-.59-10.47-4.48,2.4-16.74,2.4-22.12-3-27.2-.31-31.09S415.12,427.4,420.5,425a5.86,5.86,0,0,0,3.36-3.79,10.84,10.84,0,0,0-.07-5.47s-.91-.75-2.16-1.86c-3.17-2.83-8.53-8.08-6.81-9.8,2.39-2.4,0-17.94,0-17.94s-5.68-11.95-3.58-16.43S393,341.61,393,341.61s0-40.64,24.51-42.44c0,0,17.34.6,19.43-7.17s15.84-12.26,15.84-12.26l31.39,6.88s27.79,6,32.88,2.39,9,4.78,9,4.78,17.33.9,19.12,4.49-5.67,38.55-5.67,38.55-12.56-1.19-11.66,12.26S523,379.58,523,379.58s-.9,9.86-.3,11.95c.56,1.93-1.18,9.45-1.46,10.61l0,.15s-1.25,5,.37,6.78a2,2,0,0,0,.52.4c2.4,1.19,6,12.85,6,12.85a11.83,11.83,0,0,1,2.69,8.07c-.29,4.79,1.5,16.14,9.27,22.72S555.9,475.22,555.9,475.22Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#a36468",
            },
          }),
          _c("path", {
            attrs: {
              d: "M422.59,406l0,1.27-.54,14s-18.39,1.49-28.4-1-5.8-13.6-5.4-15.9a.37.37,0,0,0,0-.09c.29-2.1,3-19.58,3-22.42s0-14.5-.45-19.88S393,341.61,393,341.61l1.94-2.38L416,347.3Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#a36468",
            },
          }),
          _c("path", {
            attrs: {
              d: "M422.54,407.3l-.54,14s-18.39,1.49-28.4-1-5.8-13.6-5.4-15.9Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M423.86,421.22a10.84,10.84,0,0,0-.07-5.47s-.91-.75-2.16-1.86c15.83-2.21,78.52-10.81,99.63-11.75l0,.15s-1.25,5,.37,6.78Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M523.62,432s3.89,22-10.61,29.74C513,461.78,521.23,450.87,523.62,432Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M428.72,462.37s35-6,41.85-1.34S428.72,462.37,428.72,462.37Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M511.52,326.22s-5.38,22.12-1.35,27.2S511.52,326.22,511.52,326.22Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M410.19,308.14s4.93,8.22,1.94,16.74S410.19,308.14,410.19,308.14Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M400,380.18s6.28,3.73,4.19,9.56S400,380.18,400,380.18Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M399.43,363.14s5.82,3.14,6.57,7.77S399.43,363.14,399.43,363.14Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M485.81,541.88s36.62,3.74,43.94-4.93C529.75,537,496.72,543.53,485.81,541.88Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M422.59,539.79s39.31,9.27,47.08,1.94C469.67,541.73,435.89,544.27,422.59,539.79Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M488.65,554s16.44,0,24.06.45S488.65,554,488.65,554Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M425.28,561s8.07,9.12,17.19,7.48S425.28,561,425.28,561Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M441.13,187.65c-2.53,3.93-2.62,8.48-3.28,12.84-1.54,10.19-6.53,20.06-14.34,28.38-7.17,7.62-17,14.53-18.86,23.84-1.76,8.84,4.21,17.35,7.34,26,8.25,22.69-3.27,46.49-6.63,69.91-.93,6.47.19,14.74,8.16,16.89,2.49.68,5.34.59,7.58,1.67,3,1.44,3.92,4.43,4.47,7.12a108.82,108.82,0,0,1,2.06,29.28c-.36,5.5-.76,11.83,4.44,15.61,2.36,1.73,5.54,2.61,8.61,3.44,8.19,2.21,18.78,4,24.3-1.19,2.32-2.17,3.19-5.23,6.08-6.95,4.33-2.57,10.47-.83,15.92-.56,11.19.56,21.47-6,25.88-13.91s4-17,2.4-25.53-4.46-17-4.66-25.66c-.07-3,.2-6.05,1.92-8.71,3.33-5.15,11.08-7.49,16.38-11.54,9.93-7.6,9.9-20.05,6.29-30.47S525.1,277.7,524.3,266.93a11.87,11.87,0,0,1,1.47-7.53c1.42-2.19,3.9-3.83,6-5.64,14.49-12.24,12.78-32.34.8-46.1C519.31,192.41,459.23,159.56,441.13,187.65Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#e3787d",
            },
          }),
          _c("g", { attrs: { opacity: "0.1" } }, [
            _c("path", {
              attrs: {
                d: "M413.83,288.13c1.13-9.09.92-18.1-2.29-26.95-1.58-4.34-3.87-8.65-5.54-13a18.76,18.76,0,0,0-1.8,5c-1.76,8.84,4.21,17.35,7.34,26A47.28,47.28,0,0,1,413.83,288.13Z",
                transform: "translate(-100.52 -33.01)",
              },
            }),
            _c("path", {
              attrs: {
                d: "M427.18,386.05a109.22,109.22,0,0,0-2.05-29.28c-.56-2.69-1.48-5.67-4.48-7.11-2.24-1.08-5.09-1-7.58-1.67a10.33,10.33,0,0,1-7-5.78c-.46,2.28-.86,4.55-1.19,6.83-.93,6.47.19,14.74,8.16,16.89,2.49.67,5.34.58,7.58,1.66,3,1.44,3.92,4.43,4.48,7.12a110.81,110.81,0,0,1,1.92,13.52C427.09,387.49,427.13,386.77,427.18,386.05Z",
                transform: "translate(-100.52 -33.01)",
              },
            }),
            _c("path", {
              attrs: {
                d: "M512.42,382.5c-4.42,7.94-14.7,14.47-25.89,13.91-5.45-.28-11.59-2-15.91.56-2.89,1.71-3.77,4.78-6.09,6.95-5.52,5.15-16.11,3.4-24.3,1.19-3.07-.84-6.24-1.71-8.61-3.44a10.8,10.8,0,0,1-4.25-6.9c.06,3.07,0,6.15-.19,9.22-.36,5.5-.76,11.83,4.44,15.62,2.37,1.72,5.54,2.6,8.61,3.43,8.19,2.21,18.78,4,24.3-1.19,2.32-2.17,3.2-5.23,6.09-7,4.32-2.57,10.46-.83,15.91-.56,11.19.56,21.47-6,25.89-13.91,4.24-7.64,4.05-16.28,2.57-24.53A26.87,26.87,0,0,1,512.42,382.5Z",
                transform: "translate(-100.52 -33.01)",
              },
            }),
            _c("path", {
              attrs: {
                d: "M531.36,236.28c-2.14,1.8-4.62,3.45-6,5.64a11.87,11.87,0,0,0-1.47,7.53,40.06,40.06,0,0,0,2.06,9.6,39.94,39.94,0,0,1,5.45-4.84c9.8-8.27,12.18-20.14,9-31.22A28.54,28.54,0,0,1,531.36,236.28Z",
                transform: "translate(-100.52 -33.01)",
              },
            }),
            _c("path", {
              attrs: {
                d: "M528.45,311.05c-5.29,4.05-13.05,6.4-16.37,11.55-1.73,2.66-2,5.73-1.93,8.7a60.08,60.08,0,0,0,1.28,10.4,9.62,9.62,0,0,1,.65-1.17c3.32-5.15,11.08-7.49,16.37-11.54,9.07-6.94,9.83-17.92,7.15-27.71A20.76,20.76,0,0,1,528.45,311.05Z",
                transform: "translate(-100.52 -33.01)",
              },
            }),
          ]),
          _c("path", {
            attrs: {
              d: "M582.8,332.35s25.86-1.34,28.1-12.25-7-22-9.26-23.17S575,277.2,575,277.2l-39.3-25.1s-18.83-54-23-33.33,12.11,48.12,12.11,48.12,22.56,14.5,25.1,18.83S568,301.41,568,301.41Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#efb7b9",
            },
          }),
          _c("path", {
            attrs: {
              d: "M596.7,314.71c-6.12,15.55-14.05,21.68-14.05,21.68l-4.41,0-38.77.4L535,324.58l6.28-26.46,3.88.16s4.64,2.39,7.47,2.39,8.38-.15,10,.59a1.23,1.23,0,0,0,.73.11c1.47-.15,3-2.35,3-2.35S602.83,299.17,596.7,314.71Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#a36468",
            },
          }),
          _c("path", {
            attrs: {
              d: "M596.7,314.71c-6.12,15.55-14.05,21.68-14.05,21.68l-4.41,0c2.3-6.16,7.15-18.8,9-21.72,1.81-2.76-14.43-9.63-23.93-13.34,1.47-.15,3-2.35,3-2.35S602.83,299.17,596.7,314.71Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("ellipse", {
            attrs: {
              cx: "90.82",
              cy: "763.14",
              rx: "44.18",
              ry: "8.64",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("ellipse", {
            attrs: {
              cx: "827.28",
              cy: "706.15",
              rx: "32.18",
              ry: "6.29",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("ellipse", {
            attrs: {
              cx: "966.77",
              cy: "731.64",
              rx: "32.18",
              ry: "6.29",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("ellipse", {
            attrs: {
              cx: "750.78",
              cy: "784.14",
              rx: "32.18",
              ry: "6.29",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M233.09,556.31s7.24,9.47-3.34,23.75S210.46,606.4,214,615.31c0,0,15.95-26.53,28.94-26.9S247.38,572.27,233.09,556.31Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M233.09,556.31a11.79,11.79,0,0,1,1.48,3c12.67,14.89,19.42,28.78,7.24,29.13-11.34.32-24.95,20.61-28.21,25.73a9.44,9.44,0,0,0,.39,1.17s15.95-26.53,28.94-26.9S247.38,572.27,233.09,556.31Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M246.54,568.37c0,3.33-.37,6-.83,6s-.84-2.7-.84-6,.47-1.76.93-1.76S246.54,565,246.54,568.37Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#ffd037",
            },
          }),
          _c("path", {
            attrs: {
              d: "M251.16,572.35c-2.92,1.59-5.47,2.56-5.69,2.15s2-2,4.89-3.62,1.77-.43,2,0S254.08,570.75,251.16,572.35Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#ffd037",
            },
          }),
          _c("path", {
            attrs: {
              d: "M194.88,556.31s-7.24,9.47,3.34,23.75S217.51,606.4,214,615.31c0,0-16-26.53-29-26.9S180.59,572.27,194.88,556.31Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#00bfa6",
            },
          }),
          _c("path", {
            attrs: {
              d: "M194.88,556.31a11.79,11.79,0,0,0-1.48,3c-12.67,14.89-19.42,28.78-7.24,29.13,11.34.32,25,20.61,28.21,25.73a11.41,11.41,0,0,1-.38,1.17s-16-26.53-29-26.9S180.59,572.27,194.88,556.31Z",
              transform: "translate(-100.52 -33.01)",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M181.43,568.37c0,3.33.37,6,.83,6s.84-2.7.84-6-.47-1.76-.93-1.76S181.43,565,181.43,568.37Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#ffd037",
            },
          }),
          _c("path", {
            attrs: {
              d: "M176.81,572.35c2.93,1.59,5.47,2.56,5.7,2.15s-2-2-4.9-3.62-1.77-.43-2,0S173.89,570.75,176.81,572.35Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#ffd037",
            },
          }),
          _c("ellipse", {
            attrs: {
              cx: "113.46",
              cy: "643.07",
              rx: "75.65",
              ry: "11.61",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("path", {
            attrs: {
              d: "M252.92,602.56l-.36,3-.51,4.17-.21,1.74-.51,4.18-.22,1.74-.51,4.17L244.82,669c-.52,4.24-7.44,7.54-15.8,7.54H199c-8.36,0-15.27-3.3-15.79-7.54l-5.79-47.45-.51-4.17-.21-1.74-.52-4.18-.21-1.74-.51-4.17-.36-3c-.29-2.4,3.45-4.42,8.18-4.42h61.52C249.47,598.14,253.22,600.16,252.92,602.56Z",
              transform: "translate(-100.52 -33.01)",
              fill: "#65617d",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "152.03 572.5 151.53 576.68 75.39 576.68 74.89 572.5 152.03 572.5",
              fill: "#9d9cb5",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "151.31 578.42 150.81 582.59 76.12 582.59 75.61 578.42 151.31 578.42",
              fill: "#9d9cb5",
            },
          }),
          _c("polygon", {
            attrs: {
              points:
                "150.59 584.33 150.08 588.5 76.84 588.5 76.33 584.33 150.59 584.33",
              fill: "#9d9cb5",
            },
          }),
          _c("circle", {
            attrs: {
              cx: "179.99",
              cy: "124.52",
              r: "31.5",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("circle", {
            attrs: {
              cx: "113.99",
              cy: "49.52",
              r: "19.5",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
          _c("circle", {
            attrs: {
              cx: "12",
              cy: "93.02",
              r: "12",
              fill: "#00bfa6",
              opacity: "0.1",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "text-sm" }, [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _vm._t("action"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=template&id=356834b6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamResultQuestionChip.vue?vue&type=template&id=356834b6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "tooltip",
          rawName: "v-tooltip.top",
          value: _vm.questionStatus,
          expression: "questionStatus",
          modifiers: { top: true },
        },
      ],
      staticClass: "w-full overflow-hidden rounded-sm cursor-pointer",
    },
    [
      _c("question-chip", {
        attrs: {
          sno: _vm.sno,
          status: _vm.chipStatus,
          "is-active": _vm.active,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "border rounded border-gray-200 bg-gray-50 p-6 shadow-sm" },
    [
      _c("div", { staticClass: "flex gap-2 mb-4" }, [
        _c("span", { staticClass: "text-sm font-semibold" }, [
          _vm._v("Q" + _vm._s(_vm.sno) + " of " + _vm._s(_vm.totalQuestions)),
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "text-sm" }, [_vm._v("|")]),
        _vm._v(" "),
        _c("span", { staticClass: "text-sm text-gray-600 uppercase" }, [
          _vm._v(_vm._s(_vm.question.skill)),
        ]),
      ]),
      _vm._v(" "),
      _vm.attachmentType != null
        ? _c("div", { staticClass: "mb-4" }, [
            _vm.attachmentType === "audio"
              ? _c(
                  "div",
                  [
                    _c("audio-attachment", {
                      attrs: {
                        reference: "player_" + _vm.question.code,
                        options: _vm.attachment,
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.attachmentType === "video"
              ? _c(
                  "div",
                  [
                    _c("video-attachment", {
                      attrs: {
                        reference: "player_" + _vm.question.code,
                        options: _vm.attachment,
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.attachmentType === "comprehension"
              ? _c(
                  "div",
                  [
                    _c("comprehension-attachment", {
                      attrs: { passage: _vm.attachment },
                    }),
                  ],
                  1
                )
              : _vm._e(),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        staticClass: "q-data question",
        domProps: { innerHTML: _vm._s(_vm.question.question) },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "q-data rounded bg-yellow-50 border border-yellow-200 p-6" },
    [
      _c("h4", { staticClass: "font-semibold text-gray-600 mb-4 uppercase" }, [
        _vm._v(_vm._s(_vm.__("Solution"))),
      ]),
      _vm._v(" "),
      _vm.question.solution_video
        ? _c(
            "div",
            [
              _c("video-attachment", {
                attrs: {
                  reference: "player_" + _vm.question.code,
                  options: _vm.question.solution_video,
                  "show-message": false,
                },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { domProps: { innerHTML: _vm._s(_vm.question.solution) } }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "relative" },
    [
      _c(
        "div",
        {
          on: {
            click: function ($event) {
              _vm.open = !_vm.open
            },
          },
        },
        [_vm._t("trigger")],
        2
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.open,
            expression: "open",
          },
        ],
        staticClass: "fixed inset-0 z-40",
        on: {
          click: function ($event) {
            _vm.open = false
          },
        },
      }),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "transition ease-out duration-200",
            "enter-class": "transform opacity-0 scale-95",
            "enter-to-class": "transform opacity-100 scale-100",
            "leave-active-class": "transition ease-in duration-75",
            "leave-class": "transform opacity-100 scale-100",
            "leave-to-class": "transform opacity-0 scale-95",
          },
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.open,
                  expression: "open",
                },
              ],
              staticClass: "absolute z-50 mt-2 shadow rounded",
              class: [_vm.widthClass, _vm.alignmentClasses],
              staticStyle: { display: "none" },
              on: {
                click: function ($event) {
                  _vm.open = false
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "rounded-sm ring-1 ring-black ring-opacity-5",
                  class: _vm.contentClasses,
                },
                [_vm._t("content")],
                2
              ),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.as === "button"
        ? _c(
            "button",
            {
              staticClass:
                "block text-sm w-full px-4 py-2 leading-5 text-gray-700 ltr:text-left rtl:text-right hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
              attrs: { type: "submit" },
            },
            [_vm._t("default")],
            2
          )
        : _c(
            "inertia-link",
            {
              staticClass:
                "text-sm block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 ltr:text-left rtl:text-right focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
              attrs: { href: _vm.href },
            },
            [_vm._t("default")],
            2
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "inertia-link",
    { class: _vm.classes, attrs: { href: _vm.href } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "audio-options z-40" }, [
    _c(
      "div",
      {
        staticClass:
          "font-mono px-2 py-1 inline-block text-gray-600 rounded text-sm mb-2",
      },
      [_vm._v("\n        Listen to the audio and answer the question\n    ")]
    ),
    _vm._v(" "),
    _vm.options.audio_type === "mp3"
      ? _c(
          "div",
          [
            _c(
              "vue-plyr",
              { ref: _vm.reference, attrs: { options: _vm.plyrOptions } },
              [
                _c("audio", { attrs: { controls: "", crossorigin: "" } }, [
                  _c("source", {
                    attrs: { src: _vm.options.link, type: "audio/mp3" },
                  }),
                ]),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.options.audio_type === "ogg"
      ? _c(
          "div",
          [
            _c(
              "vue-plyr",
              { ref: _vm.reference, attrs: { options: _vm.plyrOptions } },
              [
                _c("audio", { attrs: { controls: "", crossorigin: "" } }, [
                  _c("source", {
                    attrs: { src: _vm.options.link, type: "audio/ogg" },
                  }),
                ]),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "audio-options" },
    [
      _c(
        "div",
        {
          staticClass:
            "font-mono px-2 py-1 inline-block text-gray-600 rounded text-sm mb-2",
        },
        [_vm._v("\n        Read the passage and answer the question\n    ")]
      ),
      _vm._v(" "),
      _c(
        "perfect-scrollbar",
        {
          ref: "comScroll",
          staticStyle: { "max-height": "24rem" },
          attrs: { options: _vm.scrollbarOptions },
        },
        [_c("div", { domProps: { innerHTML: _vm._s(_vm.passage) } })]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "audio-options" }, [
    _vm.showMessage
      ? _c(
          "div",
          {
            staticClass:
              "font-mono px-2 py-1 inline-block text-gray-600 rounded text-sm mb-2",
          },
          [_vm._v("\n        Watch the video and answer the question\n    ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.options.video_type === "mp4"
      ? _c(
          "div",
          [
            _c(
              "vue-plyr",
              { ref: _vm.reference, attrs: { options: _vm.plyrOptions } },
              [
                _c("video", { attrs: { src: _vm.options.link } }, [
                  _c("source", {
                    attrs: { src: _vm.options.link, type: "video/mp4" },
                  }),
                ]),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.options.video_type === "youtube"
      ? _c(
          "div",
          [
            _c(
              "vue-plyr",
              { ref: _vm.reference, attrs: { options: _vm.plyrOptions } },
              [
                _c("div", { staticClass: "plyr__video-embed" }, [
                  _c("iframe", {
                    attrs: {
                      src: _vm.getVideoLink,
                      allowfullscreen: "",
                      allowtransparency: "",
                      allow: "autoplay",
                    },
                  }),
                ]),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.options.video_type === "vimeo"
      ? _c(
          "div",
          [
            _c("vue-plyr", { ref: _vm.reference }, [
              _c("div", { staticClass: "plyr__video-embed" }, [
                _c("iframe", { attrs: { src: _vm.getVideoLink } }),
              ]),
            ]),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=template&id=aec626b4&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/FIBSolution.vue?vue&type=template&id=aec626b4& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "q-inputs" },
    [
      _vm._l(_vm.options, function (blank, index) {
        return _c("div", { key: "blank_" + index }, [
          _c("div", { staticClass: "mb-2", class: _vm.labelClass(index) }, [
            _c("div", { staticClass: "i-id" }, [
              _c(
                "label",
                { attrs: { for: _vm.question_id + "ans_" + (blank - 1) } },
                [_vm._v(_vm._s(blank))]
              ),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.answer[blank - 1],
                  expression: "answer[blank-1]",
                },
              ],
              attrs: {
                id: _vm.question_id + "ans_" + (blank - 1),
                placeholder: "Type your answer for blank " + blank,
                disabled: "disabled",
              },
              domProps: { value: _vm.answer[blank - 1] },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.answer, blank - 1, $event.target.value)
                },
              },
            }),
          ]),
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
        },
        [
          _c(
            "svg",
            {
              staticClass: "w-6 h-6 text-green-400",
              attrs: {
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              _c("path", {
                attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c("h4", {
            staticClass: "text-gray-600",
            domProps: { innerHTML: _vm._s(_vm.answerText) },
          }),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=template&id=92de1730&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MMASolution.vue?vue&type=template&id=92de1730& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "q-radio" }, [
    _c(
      "div",
      { staticClass: "q-options" },
      _vm._l(_vm.options, function (option, index) {
        return _c("div", { key: option, staticClass: "q-option" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.answer,
                expression: "answer",
              },
            ],
            attrs: {
              type: "checkbox",
              id: "q_" + _vm.question_id + "_option_" + index,
              disabled: "disabled",
            },
            domProps: {
              value: index + 1,
              checked: Array.isArray(_vm.answer)
                ? _vm._i(_vm.answer, index + 1) > -1
                : _vm.answer,
            },
            on: {
              change: function ($event) {
                var $$a = _vm.answer,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = index + 1,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.answer = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.answer = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.answer = $$c
                }
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              class: _vm.labelClass(index),
              attrs: { for: "q_" + _vm.question_id + "_option_" + index },
            },
            [
              _c("span", { staticClass: "o-id squared" }, [
                _c("strong", [_vm._v(_vm._s(index + 1))]),
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "o-text",
                domProps: { innerHTML: _vm._s(option) },
              }),
            ]
          ),
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
      },
      [
        _c(
          "svg",
          {
            staticClass: "w-6 h-6 text-green-400",
            attrs: {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            _c("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c("h4", {
          staticClass: "text-gray-600",
          domProps: { innerHTML: _vm._s(_vm.answerText) },
        }),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=template&id=01c3ae22&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MSASolution.vue?vue&type=template&id=01c3ae22& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "q-radio" }, [
    _c(
      "div",
      { staticClass: "q-options" },
      _vm._l(_vm.options, function (option, index) {
        return _c("div", { key: option, staticClass: "q-option" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.answer,
                expression: "answer",
              },
            ],
            attrs: {
              type: "radio",
              id: _vm.question_id + "_option_" + index,
              disabled: "disabled",
            },
            domProps: {
              value: index + 1,
              checked: _vm._q(_vm.answer, index + 1),
            },
            on: {
              change: function ($event) {
                _vm.answer = index + 1
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              class: _vm.labelClass(index),
              attrs: { for: _vm.question_id + "_option_" + index },
            },
            [
              _c("span", { staticClass: "o-id" }, [
                _c("strong", [_vm._v(_vm._s(index + 1))]),
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "o-text",
                domProps: { innerHTML: _vm._s(option) },
              }),
            ]
          ),
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
      },
      [
        _c(
          "svg",
          {
            staticClass: "w-6 h-6 text-green-400",
            attrs: {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            _c("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c("h4", {
          staticClass: " text-gray-600",
          domProps: { innerHTML: _vm._s(_vm.answerText) },
        }),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=template&id=e79ecf74&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/MTFSolution.vue?vue&type=template&id=e79ecf74& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "q-radio" }, [
    _c("div", { staticClass: "flex flex-col sm:flex-row gap-2 q-options" }, [
      _c(
        "div",
        { staticClass: "w-full flex flex-col justify-between" },
        _vm._l(_vm.options, function (item, index) {
          return _c("div", { key: item.id, staticClass: "q-option h-full" }, [
            _c(
              "label",
              {
                staticClass: "h-full",
                attrs: { for: _vm.question_id + "_option_" + index },
              },
              [
                _c("span", { staticClass: "o-id" }, [
                  _c("strong", [_vm._v(_vm._s(index + 1))]),
                ]),
                _vm._v(" "),
                _c("span", {
                  staticClass: "o-text",
                  domProps: { innerHTML: _vm._s(item.value) },
                }),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-full" },
        [
          _c(
            "draggable",
            {
              attrs: { group: "options", sort: false },
              model: {
                value: _vm.answer,
                callback: function ($$v) {
                  _vm.answer = $$v
                },
                expression: "answer",
              },
            },
            [
              _c(
                "transition-group",
                {
                  staticClass: "w-full flex flex-col justify-between",
                  attrs: { name: "flip-list", tag: "div" },
                },
                _vm._l(_vm.answer, function (item, index) {
                  return _c(
                    "div",
                    { key: item.id, staticClass: "q-option h-full" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "h-full",
                          class: _vm.labelClass(index),
                          attrs: { for: _vm.question_id + "_pair_" + index },
                        },
                        [
                          _c("span", { staticClass: "o-id match" }, [
                            _c("strong", [_vm._v(_vm._s(index + 1))]),
                            _vm._v(" - "),
                            _c("strong", [_vm._v(_vm._s(item.code))]),
                          ]),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "o-text",
                            domProps: { innerHTML: _vm._s(item.value) },
                          }),
                        ]
                      ),
                    ]
                  )
                }),
                0
              ),
            ],
            1
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
      },
      [
        _c(
          "svg",
          {
            staticClass: "w-6 h-6 text-green-400",
            attrs: {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            _c("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c("h4", {
          staticClass: "text-sm text-gray-600",
          domProps: { innerHTML: _vm._s(_vm.answerText) },
        }),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=template&id=c1b466f0&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/ORDSolution.vue?vue&type=template&id=c1b466f0& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "q-radio" }, [
    _c(
      "div",
      { staticClass: "q-options" },
      [
        _c(
          "draggable",
          {
            attrs: { sort: false, group: "options" },
            model: {
              value: _vm.answer,
              callback: function ($$v) {
                _vm.answer = $$v
              },
              expression: "answer",
            },
          },
          _vm._l(_vm.answer, function (option, index) {
            return _c("div", { key: option.id, staticClass: "q-option" }, [
              _c(
                "label",
                {
                  class: _vm.labelClass(index),
                  attrs: { for: _vm.question_id + "_option_" + index },
                },
                [
                  _c("span", { staticClass: "o-id match" }, [
                    _c("strong", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" - "),
                    _c("strong", [_vm._v(_vm._s(option.code))]),
                  ]),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "o-text",
                    domProps: { innerHTML: _vm._s(option.value) },
                  }),
                ]
              ),
            ])
          }),
          0
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
      },
      [
        _c(
          "svg",
          {
            staticClass: "w-6 h-6 text-green-400",
            attrs: {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            _c("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c("h4", {
          staticClass: "text-sm text-gray-600",
          domProps: { innerHTML: _vm._s(_vm.answerText) },
        }),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=template&id=2380668a&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Solutions/SAQSolution.vue?vue&type=template&id=2380668a& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "q-inputs" }, [
    _c("div", { class: _vm.labelClass() }, [
      _c("div", { staticClass: "i-id" }, [
        _c("label", { attrs: { for: _vm.question_id } }, [_vm._v("A")]),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.answer,
            expression: "answer",
          },
        ],
        attrs: {
          id: _vm.question_id,
          placeholder: "Type your answer",
          disabled: "disabled",
        },
        domProps: { value: _vm.answer },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.answer = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
      },
      [
        _c(
          "svg",
          {
            staticClass: "w-6 h-6 text-green-400",
            attrs: {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            _c("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c("h4", {
          staticClass: " text-gray-600",
          domProps: { innerHTML: _vm._s(_vm.answerText) },
        }),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.as == "button"
        ? _c(
            "button",
            { staticClass: "w-full text-left", class: _vm.classes },
            [_vm._t("default")],
            2
          )
        : _c(
            "inertia-link",
            { class: _vm.classes, attrs: { href: _vm.href } },
            [_vm._t("default")],
            2
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex group gap-2 items-center" }, [
    _c(
      "svg",
      {
        staticClass:
          "transition duration-300 ease-in-out transform group-hover:scale-110",
        class: _vm.iconSize,
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "300px",
          height: "300px",
          viewBox: "0 0 300 300",
          "enable-background": "new 0 0 300 300",
          "xml:space": "preserve",
        },
      },
      [
        _c("g", [
          _c("ellipse", {
            attrs: {
              fill: "#FFC843",
              cx: "149.833",
              cy: "149.501",
              rx: "147.833",
              ry: "146.166",
            },
          }),
          _c("ellipse", {
            attrs: {
              fill: "#D38700",
              cx: "150",
              cy: "150.168",
              rx: "113.667",
              ry: "113.833",
            },
          }),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              fill: "#FFC843",
              points:
                "192.716,211.945 151.021,190.203 109.476,212.222 117.27,165.852 83.489,133.142 129.999,126.226\n                                        150.667,83.991 171.618,126.086 218.172,132.693 184.611,165.626",
            },
          }),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("span", { staticClass: "font-semibold ", class: _vm.textColor }, [
      _vm._v(_vm._s(_vm.points) + " XP"),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "w-full overflow-hidden dark_question_card rounded cursor-pointer",
    },
    [
      _c(
        "div",
        {
          staticClass:
            "hover:bg-gray-600 text-gray-400 hover:text-gray-200 rounded p-4",
        },
        [
          _c(
            "div",
            { staticClass: "flex items-start gap-4 opacity-25" },
            [
              _c("Skeleton", {
                staticClass: "bg-gray-700",
                attrs: { width: "1rem", height: "10px" },
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full" },
                [
                  _c("Skeleton", {
                    staticClass: "w-full mb-2",
                    attrs: { height: "10px" },
                  }),
                  _vm._v(" "),
                  _c("Skeleton", {
                    staticClass: "w-full mb-2",
                    attrs: { height: "10px" },
                  }),
                  _vm._v(" "),
                  _c("Skeleton", {
                    staticClass: "w-full",
                    attrs: { height: "10px" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mb-6" },
    [
      _c("Skeleton", { staticClass: "mb-2", attrs: { width: "10rem" } }),
      _vm._v(" "),
      _c("Skeleton", { attrs: { height: "2rem" } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SideBarNav.vue?vue&type=template&id=450c9552&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SideBarNav.vue?vue&type=template&id=450c9552& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "relative px-4 space-y-3",
      class: { "flex-1 bg-primary": !_vm.isMobile },
    },
    [
      _c(
        "div",
        { staticClass: "bg-gray-100 bg-opacity-10 rounded-md py-3 px-4" },
        [
          _c("h4", { staticClass: "text-white text-base font-semibold" }, [
            _vm._v(
              _vm._s(
                _vm.$page.props.currentCategory
                  ? _vm.$page.props.currentCategory.name
                  : _vm.__("No Class Selected")
              )
            ),
          ]),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass: "text-secondary underline text-sm",
              attrs: { href: _vm.route("change_syllabus") },
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(
                    _vm.$page.props.currentCategory
                      ? _vm.__("Change Class")
                      : _vm.__("Choose Class")
                  ) +
                  "\n        "
              ),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "inertia-link",
        {
          staticClass:
            "group rounded-md md py-3 px-4 flex items-center text-base font-semibold",
          class: [
            _vm.route().current() === "user_dashboard"
              ? "bg-secondary text-white"
              : "text-white hover:bg-secondary hover:text-white",
          ],
          attrs: { href: _vm.route("user_dashboard") },
        },
        [
          _c(
            "svg",
            {
              staticClass:
                "group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",
              class: [
                _vm.route().current() === "user_dashboard"
                  ? "text-white"
                  : "text-secondary",
              ],
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
              },
            },
            [
              _c("path", { attrs: { d: "M0 0h24v24H0V0z", fill: "none" } }),
              _c("path", {
                attrs: {
                  d: "M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z",
                },
              }),
            ]
          ),
          _vm._v("\n        " + _vm._s(_vm.__("Dashboard")) + "\n    "),
        ]
      ),
      _vm._v(" "),
      _c(
        "inertia-link",
        {
          staticClass:
            "group rounded-md py-3 px-4 flex items-center text-base font-semibold",
          class: [
            _vm.route().current() === "learn_practice"
              ? "bg-secondary text-white"
              : "text-white hover:bg-secondary hover:text-white",
          ],
          attrs: { href: _vm.route("learn_practice") },
        },
        [
          _c(
            "svg",
            {
              staticClass:
                "group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",
              class: [
                _vm.route().current() === "learn_practice"
                  ? "text-white"
                  : "text-secondary",
              ],
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                "enable-background": "new 0 0 24 24",
                viewBox: "0 0 24 24",
                fill: "currentColor",
              },
            },
            [
              _c("g", [
                _c("path", { attrs: { d: "M0,0h24v24H0V0z", fill: "none" } }),
              ]),
              _c("g", [
                _c("path", {
                  attrs: {
                    d: "M5,20V4h2v7l2.5-1.5L12,11V4h5v7.08c0.33-0.05,0.66-0.08,1-0.08s0.67,0.03,1,0.08V4c0-1.1-0.9-2-2-2H5C3.9,2,3,2.9,3,4v16 c0,1.1,0.9,2,2,2h7.26c-0.42-0.6-0.75-1.28-0.97-2H5z M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M16.75,20.5v-5l4,2.5L16.75,20.5z",
                  },
                }),
              ]),
            ]
          ),
          _vm._v("\n        " + _vm._s(_vm.__("Learn & Practice")) + "\n    "),
        ]
      ),
      _vm._v(" "),
      _c(
        "inertia-link",
        {
          staticClass:
            "group rounded-md py-3 px-4 flex items-center text-base font-semibold",
          class: [
            _vm.route().current() === "exam_dashboard"
              ? "bg-secondary text-white"
              : "text-white hover:bg-secondary hover:text-white",
          ],
          attrs: { href: _vm.route("exam_dashboard") },
        },
        [
          _c(
            "svg",
            {
              staticClass:
                "group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",
              class: [
                _vm.route().current() === "exam_dashboard"
                  ? "text-white"
                  : "text-secondary",
              ],
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                "enable-background": "new 0 0 24 24",
                viewBox: "0 0 24 24",
                fill: "currentColor",
              },
            },
            [
              _c("path", {
                attrs: {
                  d: "M10 11H18V9H10ZM10 14H14V12H10ZM10 8H18V6H10ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM8 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16ZM8 4Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16Q8 16 8 16Q8 16 8 16V4Q8 4 8 4Q8 4 8 4ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z",
                },
              }),
            ]
          ),
          _vm._v("\n        " + _vm._s(_vm.__("Exams")) + "\n    "),
        ]
      ),
      _vm._v(" "),
      _c(
        "inertia-link",
        {
          staticClass:
            "group rounded-md py-3 px-4 flex items-center text-base font-semibold",
          class: [
            _vm.route().current() === "quiz_dashboard"
              ? "bg-secondary text-white"
              : "text-white hover:bg-secondary hover:text-white",
          ],
          attrs: { href: _vm.route("quiz_dashboard") },
        },
        [
          _c(
            "svg",
            {
              staticClass:
                "group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",
              class: [
                _vm.route().current() === "quiz_dashboard"
                  ? "text-white"
                  : "text-secondary",
              ],
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                "enable-background": "new 0 0 24 24",
                viewBox: "0 0 24 24",
                fill: "currentColor",
              },
            },
            [
              _c("g", [
                _c("path", { attrs: { d: "M0,0h24v24H0V0z", fill: "none" } }),
              ]),
              _c("g", [
                _c("path", {
                  attrs: {
                    d: "M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2z M20,16H8V4h12V16z M13.51,10.16c0.41-0.73,1.18-1.16,1.63-1.8c0.48-0.68,0.21-1.94-1.14-1.94 c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26c0.37,0.6,0.58,1.73,0.01,2.57 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52C13.26,11.41,13.19,10.74,13.51,10.16z M12.95,13.95 c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04c0,0.58-0.44,1.05-1.04,1.05C13.42,15,12.95,14.53,12.95,13.95z",
                  },
                }),
              ]),
            ]
          ),
          _vm._v("\n        " + _vm._s(_vm.__("Quizzes")) + "\n    "),
        ]
      ),
      _vm._v(" "),
      _c(
        "inertia-link",
        {
          staticClass:
            "group rounded-md py-3 px-4 flex items-center text-base font-semibold",
          class: [
            _vm.route().current() === "my_progress"
              ? "bg-secondary text-white"
              : "text-white hover:bg-secondary hover:text-white",
          ],
          attrs: { href: _vm.route("my_progress") },
        },
        [
          _c(
            "svg",
            {
              staticClass:
                "group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",
              class: [
                _vm.route().current() === "my_progress"
                  ? "text-white"
                  : "text-secondary",
              ],
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
              },
            },
            [
              _c("path", { attrs: { d: "M0 0h24v24H0V0z", fill: "none" } }),
              _c("path", {
                attrs: {
                  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z",
                },
              }),
            ]
          ),
          _vm._v("\n        " + _vm._s(_vm.__("My Progress")) + "\n    "),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=template&id=006af111&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Stepper/ProgressNavigator.vue?vue&type=template&id=006af111& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full" }, [
    _c("div", { staticClass: "sm:hidden relative w-full mx-auto rounded" }, [
      _c(
        "div",
        {
          staticClass: "w-full flex items-start relative",
          on: {
            click: function ($event) {
              _vm.open = !_vm.open
            },
          },
        },
        [
          _c(
            "button",
            {
              staticClass:
                "w-full bg-green-600 text-white flex items-center justify-center shadow rounded text-xs focus:outline-none",
            },
            [
              _c("span", { staticClass: "p-3" }, [
                _vm._v(_vm._s(_vm.__("Go To"))),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "py-3 rounded-r px-2" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      id: "downIcon2",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                  },
                  [
                    _c("path", {
                      attrs: { stroke: "none", d: "M0 0h24v24H0z" },
                    }),
                    _vm._v(" "),
                    _c("polyline", { attrs: { points: "6 9 12 15 18 9" } }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass:
                      "hidden icon icon-tabler icon-tabler-chevron-up",
                    attrs: {
                      id: "upIcon2",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                  },
                  [
                    _c("path", {
                      attrs: { stroke: "none", d: "M0 0h24v24H0z" },
                    }),
                    _vm._v(" "),
                    _c("polyline", { attrs: { points: "6 15 12 9 18 15" } }),
                  ]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "ul",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.open,
                  expression: "open",
                },
              ],
              staticClass:
                "z-30 bg-white shadow rounded py-1 absolute right-0 left-0 top-0 mt-12 dropdown-content",
            },
            _vm._l(_vm.steps, function (step, index) {
              return _c(
                "li",
                {
                  key: step.key,
                  staticClass:
                    "cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal",
                },
                [
                  _c(
                    "inertia-link",
                    { staticClass: "block", attrs: { href: step.url } },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(step.title) +
                          "\n                    "
                      ),
                    ]
                  ),
                ],
                1
              )
            }),
            0
          ),
        ]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "sm:flex items-center hidden" },
      _vm._l(_vm.steps, function (step) {
        return _c(
          "inertia-link",
          { key: step.key, attrs: { href: step.url } },
          [
            step.active
              ? _c(
                  "div",
                  {
                    staticClass:
                      "flex items-center mr-8 group border-secondary border-b-4 pb-4",
                  },
                  [
                    _c(
                      "p",
                      { staticClass: "text-sm leading-none text-primary" },
                      [_vm._v(_vm._s(step.title))]
                    ),
                  ]
                )
              : _c(
                  "div",
                  {
                    staticClass:
                      "flex items-center mr-8 group border-transparent hover:border-secondary cursor-pointer border-b-4 pb-4",
                  },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "text-sm leading-none text-gray-500 group-hover:text-primary",
                      },
                      [_vm._v(_vm._s(step.title))]
                    ),
                  ]
                ),
          ]
        )
      }),
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "h-screen overflow-hidden flex bg-gray-100",
      on: {
        keydown: function ($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k(
              $event.keyCode,
              "window",
              undefined,
              $event.key,
              undefined
            ) &&
            _vm._k($event.keyCode, "escape", undefined, $event.key, undefined)
          ) {
            return null
          }
          _vm.sidebar = false
        },
      },
    },
    [
      _c("arc-banner"),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.sidebar,
              expression: "sidebar",
            },
          ],
          ref: "dialog",
          staticClass: "fixed inset-0 z-40 flex md:hidden",
          attrs: { "aria-modal": "true" },
        },
        [
          _c(
            "transition",
            {
              attrs: {
                "enter-class": "transition-opacity ease-linear duration-300",
                "enter-active-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-class": "transition-opacity ease-linear duration-300",
                "leave-active-class": "opacity-100",
                "leave-to-class": "opacity-0",
              },
            },
            [
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.sidebar,
                    expression: "sidebar",
                  },
                ],
                staticClass: "fixed inset-0 bg-gray-600 bg-opacity-75",
                attrs: { "aria-hidden": "true" },
                on: {
                  click: function ($event) {
                    _vm.sidebar = false
                  },
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "transition",
            {
              attrs: {
                "enter-class": "transition ease-in-out duration-300 transform",
                "enter-active-class": "-translate-x-full",
                "enter-to-class": "translate-x-0",
                "leave-class": "transition ease-in-out duration-300 transform",
                "leave-active-class": "translate-x-0",
                "leave-to-class": "-translate-x-full",
              },
            },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.sidebar,
                      expression: "sidebar",
                    },
                  ],
                  staticClass:
                    "relative max-w-xs w-full bg-primary pt-5 pb-4 flex-1 flex flex-col",
                },
                [
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-class": "ease-in-out duration-300",
                        "enter-active-class": "opacity-0",
                        "enter-to-class": "opacity-100",
                        "leave-class": "ease-in-out duration-300",
                        "leave-active-class": "opacity-100",
                        "leave-to-class": "opacity-0",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.sidebar,
                              expression: "sidebar",
                            },
                          ],
                          staticClass: "absolute top-0 right-0 -mr-12 pt-2",
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  _vm.sidebar = false
                                },
                              },
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v(_vm._s(_vm.__("Close sidebar"))),
                              ]),
                              _vm._v(" "),
                              _c(
                                "svg",
                                {
                                  staticClass: "h-6 w-6 text-white",
                                  attrs: {
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                  },
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M6 18L18 6M6 6l12 12",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex-shrink-0 px-4 pb-4 border-b border-gray-100 border-opacity-10 flex items-center",
                    },
                    [
                      _c("a", { attrs: { href: _vm.route("welcome") } }, [
                        _c("img", {
                          staticClass: "h-8 w-auto",
                          attrs: {
                            src:
                              _vm.$page.props.assetUrl +
                              _vm.$page.props.general.white_logo_path,
                            alt: _vm.$page.props.general.app_name,
                          },
                        }),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-4 flex-1 h-0 overflow-y-auto" },
                    [_c("side-bar-nav", { attrs: { "is-mobile": true } })],
                    1
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex-shrink-0 w-14" }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "hidden bg-primary md:flex md:flex-shrink-0" }, [
        _c("div", { staticClass: "w-72 flex flex-col" }, [
          _c(
            "div",
            {
              staticClass:
                "border-r border-gray-200 pb-4 flex flex-col flex-grow overflow-y-auto",
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex-shrink-0 h-16 px-6 border-b border-gray-100 border-opacity-10 flex items-center",
                },
                [
                  _c("a", { attrs: { href: _vm.route("welcome") } }, [
                    _c("img", {
                      staticClass: "h-8 w-auto",
                      attrs: {
                        src:
                          _vm.$page.props.assetUrl +
                          _vm.$page.props.general.white_logo_path,
                        alt: _vm.$page.props.general.app_name,
                      },
                    }),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex-grow mt-4 flex flex-col" },
                [_c("side-bar-nav", { attrs: { "is-mobile": false } })],
                1
              ),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex-1 w-full mx-auto w-0 flex flex-col md:px-0" },
        [
          _c(
            "div",
            {
              staticClass:
                "relative z-20 flex-shrink-0 flex h-16 bg-white sm:border-b border-gray-200 lg:border-none",
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "border-b border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      _vm.sidebar = true
                    },
                  },
                },
                [
                  _c("span", { staticClass: "sr-only" }, [
                    _vm._v(_vm._s(_vm.__("Open sidebar"))),
                  ]),
                  _vm._v(" "),
                  _c(
                    "svg",
                    {
                      staticClass: "h-6 w-6",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                      },
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M4 6h16M4 12h16M4 18h7",
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex-1 max-w-5xl mx-auto border-b border-gray-200 flex justify-between px-4 md:px-0",
                },
                [
                  _c("div", { staticClass: "flex-1 flex" }, [
                    _c(
                      "form",
                      {
                        staticClass: "w-full flex md:ml-0",
                        attrs: { action: "#", method: "GET" },
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "sr-only",
                            attrs: { for: "search-field" },
                          },
                          [_vm._v(_vm._s(_vm.__("Search")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "relative w-full text-gray-400 focus-within:text-gray-600",
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "pointer-events-none absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center",
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "h-5 w-5",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor",
                                      "aria-hidden": "true",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "fill-rule": "evenodd",
                                        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                        "clip-rule": "evenodd",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticClass:
                                "block h-full w-full border-transparent py-2 ltr:pl-8 rtl:pr-8 ltr:pr-3 rtl:pl-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm",
                              attrs: {
                                id: "search-field",
                                placeholder: "Search",
                                type: "search",
                                name: "search",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "ltr:ml-4 rtl:mr-4 flex items-center md:ltr:ml-6 md:rtl:mr-6",
                    },
                    [
                      _c("rewards-badge", {
                        attrs: {
                          "text-color": "text-primary",
                          points: _vm.$page.props.user.wallet_balance,
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "ltr:ml-3 rtl:mr-3 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                          attrs: { type: "button" },
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v(_vm._s(_vm.__("View notifications"))),
                          ]),
                          _vm._v(" "),
                          _c(
                            "svg",
                            {
                              staticClass: "h-6 w-6",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "aria-hidden": "true",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "ltr:ml-3 rtl:mr-3 relative" },
                        [
                          _c("arc-dropdown", {
                            attrs: { align: "right", width: "48" },
                            scopedSlots: _vm._u([
                              {
                                key: "trigger",
                                fn: function () {
                                  return [
                                    _vm.$page.props.jetstream
                                      .managesProfilePhotos
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "flex border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out",
                                          },
                                          [
                                            _c("img", {
                                              staticClass:
                                                "h-8 w-8 rounded-full object-cover",
                                              attrs: {
                                                src: _vm.$page.props.user
                                                  .profile_photo_url,
                                                alt: _vm.$page.props.user
                                                  .first_name,
                                              },
                                            }),
                                          ]
                                        )
                                      : _c(
                                          "span",
                                          {
                                            staticClass:
                                              "inline-flex rounded-md",
                                          },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
                                                attrs: { type: "button" },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                                " +
                                                    _vm._s(
                                                      _vm.$page.props.user
                                                        .first_name
                                                    ) +
                                                    "\n\n                                                                "
                                                ),
                                                _c(
                                                  "svg",
                                                  {
                                                    staticClass:
                                                      "ml-2 -mr-0.5 h-4 w-4",
                                                    attrs: {
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      viewBox: "0 0 20 20",
                                                      fill: "currentColor",
                                                    },
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        "fill-rule": "evenodd",
                                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                        "clip-rule": "evenodd",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                  ]
                                },
                                proxy: true,
                              },
                              {
                                key: "content",
                                fn: function () {
                                  return [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "block px-4 py-2 text-xs text-gray-400",
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              _vm.$page.props.user.first_name
                                            ) +
                                            " " +
                                            _vm._s(
                                              _vm.$page.props.user.last_name
                                            ) +
                                            "\n                                "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "arc-dropdown-link",
                                      {
                                        attrs: {
                                          href: _vm.route("profile.show"),
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.__("Profile")) +
                                            "\n                                "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "arc-dropdown-link",
                                      {
                                        attrs: {
                                          href: _vm.route("user_subscriptions"),
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.__("My Subscriptions")) +
                                            "\n                                "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "arc-dropdown-link",
                                      {
                                        attrs: {
                                          href: _vm.route("user_payments"),
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.__("My Payments")) +
                                            "\n                                "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.$page.props.jetstream.hasApiFeatures
                                      ? _c(
                                          "arc-dropdown-link",
                                          {
                                            attrs: {
                                              href: _vm.route(
                                                "api-tokens.index"
                                              ),
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(_vm.__("API Tokens")) +
                                                "\n                                "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "border-t border-gray-100",
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "form",
                                      {
                                        attrs: {
                                          method: "post",
                                          action: _vm.route("logout"),
                                        },
                                      },
                                      [
                                        _c("input", {
                                          attrs: {
                                            type: "hidden",
                                            name: "_token",
                                          },
                                          domProps: {
                                            value: _vm.$page.props.csrf_token,
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "arc-dropdown-link",
                                          { attrs: { as: "button" } },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.__("Logout")) +
                                                "\n                                    "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "bg-white z-10 shadow" }, [
            _c("div", { staticClass: "max-w-5xl mx-auto" }, [
              _c("div", { staticClass: "py-4" }, [
                _c("div", { staticClass: "px-4 sm:px-6 md:px-0" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-col md:flex-row items-start md:items-center justify-between",
                    },
                    [
                      _c("div", [_vm._t("header")], 2),
                      _vm._v(" "),
                      _vm.$slots.actions
                        ? _c(
                            "div",
                            { staticClass: "sm:mb-0 sm:mt-0" },
                            [_vm._t("actions")],
                            2
                          )
                        : _vm._e(),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "perfect-scrollbar",
            {
              ref: "scroll",
              staticClass:
                "flex-1 relative h-full z-0 overflow-hidden focus:outline-none",
              attrs: { options: _vm.scrollbarOptions },
            },
            [
              _c("main", { staticClass: "max-w-5xl mx-auto" }, [
                _c(
                  "div",
                  { staticClass: "px-4 sm:px-6 md:px-0" },
                  [
                    _c(
                      "Message",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.$page.props.successMessage,
                            expression: "$page.props.successMessage",
                          },
                        ],
                        attrs: { severity: "success", closable: false },
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$page.props.successMessage) +
                            "\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _vm.$page.props.errorMessage
                      ? _c(
                          "Message",
                          { attrs: { severity: "error", closable: false } },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.$page.props.errorMessage) +
                                "\n                    "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._t("default"),
                  ],
                  2
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("Toast", { attrs: { position: "top-right" } }),
          _vm._v(" "),
          _c("portal-target", { attrs: { name: "modal", multiple: "" } }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/QuizSolutions.vue?vue&type=template&id=28201cca&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/QuizSolutions.vue?vue&type=template&id=28201cca& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "app-layout",
    {
      scopedSlots: _vm._u([
        {
          key: "header",
          fn: function () {
            return [
              _c(
                "div",
                { staticClass: "flex items-center" },
                [
                  _c("back-button"),
                  _vm._v(" "),
                  _c("h1", { staticClass: "app-heading" }, [
                    _vm._v(
                      _vm._s(_vm.quiz.title) + " " + _vm._s(_vm.__("Solutions"))
                    ),
                  ]),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-full mt-8" },
        [_c("progress-navigator", { attrs: { steps: _vm.steps } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "py-8" }, [
        _vm.quiz.settings.hide_solutions
          ? _c(
              "div",
              {
                directives: [{ name: "else", rawName: "v-else" }],
                staticClass: "mb-6",
              },
              [
                _c("empty-student-card", {
                  attrs: {
                    title: _vm.__("No Solutions Found or Solutions Hidden"),
                  },
                }),
              ],
              1
            )
          : _c("div", [
              _c("div", { staticClass: "w-full card" }, [
                _c(
                  "div",
                  { staticClass: "w-full card-body lg:flex flex-wrap" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "py-4 lg:w-1/3 w-full md:ltr:pr-6 md:rtl:pl-6",
                      },
                      [
                        _vm.loading
                          ? _c("ul", [
                              _c(
                                "li",
                                [_c("NavigationQuestionCardShimmer")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [_c("NavigationQuestionCardShimmer")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [_c("NavigationQuestionCardShimmer")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [_c("NavigationQuestionCardShimmer")],
                                1
                              ),
                            ])
                          : _c(
                              "ul",
                              {
                                staticClass:
                                  "my-6 flex flex-wrap justify-center items-center gap-2",
                              },
                              _vm._l(_vm.questions, function (question, index) {
                                return _c(
                                  "li",
                                  {
                                    key: question.code,
                                    on: {
                                      click: function ($event) {
                                        return _vm.jumpToQuestion(index)
                                      },
                                    },
                                  },
                                  [
                                    _c("exam-result-question-chip", {
                                      attrs: {
                                        sno: index + 1,
                                        is_correct: question.is_correct,
                                        status: question.status,
                                        active: _vm.current_question === index,
                                      },
                                    }),
                                  ],
                                  1
                                )
                              }),
                              0
                            ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "py-4 lg:w-2/3 w-full md:ltr:pl-6 md:rtl:pr-6 sm:ltr:border-l sm:rtl:border-r border-gray-200",
                      },
                      [
                        _vm.loading
                          ? _c("div", { staticClass: "w-full sm:w-2/3" }, [
                              _c(
                                "div",
                                { staticClass: "card card-body" },
                                [
                                  _c("PracticeQuestionShimmer", {
                                    staticClass: "w-full",
                                  }),
                                ],
                                1
                              ),
                            ])
                          : _c(
                              "div",
                              _vm._l(_vm.questions, function (question, index) {
                                return _c("div", { key: question.id }, [
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.current_question === index,
                                          expression:
                                            "current_question === index",
                                        },
                                      ],
                                      attrs: { id: question.code },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex justify-between items-center mb-6",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "font-mono px-2 py-1 inline-block bg-qt-option text-white rounded text-sm mb-2",
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(_vm.__("Time Spent")) +
                                                  ": " +
                                                  _vm._s(
                                                    question.time_taken
                                                      .detailed_readable
                                                  ) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          question.status === "answered" ||
                                          question.status ===
                                            "answered_mark_for_review"
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "font-mono px-2 py-1 inline-block text-white rounded text-sm mb-2",
                                                  class: question.is_correct
                                                    ? "bg-green-400"
                                                    : "bg-red-400",
                                                },
                                                [
                                                  question.is_correct
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "+" +
                                                            _vm._s(
                                                              question.marks_earned
                                                            ) +
                                                            " " +
                                                            _vm._s(
                                                              _vm.__(
                                                                "Marks Earned"
                                                              )
                                                            )
                                                        ),
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  !question.is_correct
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "-" +
                                                            _vm._s(
                                                              question.marks_deducted
                                                            ) +
                                                            " " +
                                                            _vm._s(
                                                              _vm.__(
                                                                "Marks Deducted"
                                                              )
                                                            )
                                                        ),
                                                      ])
                                                    : _vm._e(),
                                                ]
                                              )
                                            : _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        _vm.__("Not Answered")
                                                      ) +
                                                      "\n                                        "
                                                  ),
                                                ]
                                              ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("practice-question-card", {
                                        key: question.card,
                                        attrs: {
                                          question: question,
                                          sno: index + 1,
                                          "total-questions":
                                            _vm.quiz.total_questions,
                                        },
                                      }),
                                      _vm._v(" "),
                                      question.questionType === "MSA" ||
                                      question.questionType === "TOF"
                                        ? _c(
                                            "div",
                                            { staticClass: "mt-4" },
                                            [
                                              _c("MSASolution", {
                                                key: question.code,
                                                attrs: {
                                                  "parent-qid": question.code,
                                                  "is-correct":
                                                    question.is_correct,
                                                  status: question.status,
                                                  "parent-options":
                                                    question.options,
                                                  "parent-answer":
                                                    question.user_answer,
                                                  "correct-answer": question.ca,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      question.questionType === "MMA"
                                        ? _c(
                                            "div",
                                            { staticClass: "mt-4" },
                                            [
                                              _c("MMASolution", {
                                                key: question.code,
                                                attrs: {
                                                  "parent-qid": question.code,
                                                  "is-correct":
                                                    question.is_correct,
                                                  status: question.status,
                                                  "parent-options":
                                                    question.options,
                                                  "parent-answer":
                                                    question.user_answer,
                                                  "correct-answer": question.ca,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      question.questionType === "MTF"
                                        ? _c(
                                            "div",
                                            { staticClass: "mt-4" },
                                            [
                                              _c("MTFSolution", {
                                                key: question.code,
                                                attrs: {
                                                  parentQid: question.code,
                                                  "is-correct":
                                                    question.is_correct,
                                                  status: question.status,
                                                  "parent-options":
                                                    question.options,
                                                  "parent-answer":
                                                    question.user_answer,
                                                  "correct-answer": question.ca,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      question.questionType === "ORD"
                                        ? _c(
                                            "div",
                                            { staticClass: "mt-4" },
                                            [
                                              _c("ORDSolution", {
                                                key: question.code,
                                                attrs: {
                                                  parentQid: question.code,
                                                  "is-correct":
                                                    question.is_correct,
                                                  status: question.status,
                                                  "parent-options":
                                                    question.options,
                                                  "parent-answer":
                                                    question.user_answer,
                                                  "correct-answer": question.ca,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      question.questionType === "FIB"
                                        ? _c(
                                            "div",
                                            { staticClass: "mt-4" },
                                            [
                                              _c("FIBSolution", {
                                                key: question.code,
                                                attrs: {
                                                  parentQid: question.code,
                                                  "is-correct":
                                                    question.is_correct,
                                                  status: question.status,
                                                  "parent-options":
                                                    question.options,
                                                  "parent-answer":
                                                    question.user_answer,
                                                  "correct-answer": question.ca,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      question.questionType === "SAQ"
                                        ? _c(
                                            "div",
                                            { staticClass: "mt-4" },
                                            [
                                              _c("SAQSolution", {
                                                key: question.code,
                                                attrs: {
                                                  parentQid: question.code,
                                                  "is-correct":
                                                    question.is_correct,
                                                  status: question.status,
                                                  "parent-options":
                                                    question.options,
                                                  "parent-answer":
                                                    question.user_answer,
                                                  "correct-answer": question.ca,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mt-4" },
                                        [
                                          _c("practice-solution-card", {
                                            attrs: { question: question },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ])
                              }),
                              0
                            ),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);