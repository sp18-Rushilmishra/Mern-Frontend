//   DATA 

const students = [
  { id: 1,  name: "Alice Johnson",   age: 19, courses:[
      { code:"CS101",  grade:88 }, { code:"PHYS101", grade:91 }, { code:"ENG301", grade:85 }
  ]},
  { id: 2,  name: "Benjamin Lee",    age: 20, courses:[
      { code:"CS102", grade:76 }, { code:"MATH201", grade:82 }, { code:"ENG301", grade:79 }
  ]},
  { id: 3,  name: "Chloe Martinez",  age: 18, courses:[
      { code:"CS101", grade:93 }, { code:"CS102", grade:87 }
  ]},
  { id: 4,  name: "Daniel Kim",      age: 21, courses:[
      { code:"CS101", grade:85 }, { code:"PHYS101", grade:88 }, { code:"MATH201", grade:80 }
  ]},
  { id: 5,  name: "Ella Zhang",      age: 19, courses:[
      { code:"CS102", grade:89 }, { code:"MATH201", grade:91 }
  ]},
  { id: 6,  name: "Finn O'Brien",    age: 20, courses:[
      { code:"ENG301", grade:75 }, { code:"PHYS101", grade:78 }
  ]},
  { id: 7,  name: "Grace Patel",     age: 18, courses:[
      { code:"CS101", grade:90 }, { code:"CS102", grade:84 }, { code:"ENG301", grade:86 }
  ]},
  { id: 8,  name: "Henry Thompson",  age: 22, courses:[
      { code:"PHYS101", grade:72 }, { code:"CS102", grade:74 }, { code:"ENG301", grade:80 }
  ]},
  { id: 9,  name: "Isla Brown",      age: 19, courses:[
      { code:"MATH201", grade:89 }, { code:"PHYS101", grade:91 }
  ]},
  { id: 10, name: "Jack Wilson",     age: 20, courses:[
      { code:"CS101", grade:78 }, { code:"ENG301", grade:83 }
  ]},
  { id: 11, name: "Kylie Nguyen",    age: 18, courses:[
      { code:"CS102", grade:92 }, { code:"MATH201", grade:90 }, { code:"PHYS101", grade:88 }
  ]},
  { id: 12, name: "Liam Davis",      age: 21, courses:[
      { code:"CS101", grade:87 }, { code:"CS102", grade:85 }, { code:"ENG301", grade:81 }
  ]},
  { id: 13, name: "Maya Garcia",     age: 19, courses:[
      { code:"MATH201", grade:84 }, { code:"PHYS101", grade:86 }
  ]},
  { id: 14, name: "Noah Smith",      age: 20, courses:[
      { code:"CS101", grade:91 }, { code:"PHYS101", grade:89 }, { code:"ENG301", grade:90 }
  ]},
  { id: 15, name: "Olivia Chen",     age: 18, courses:[
      { code:"CS102", grade:95 }, { code:"MATH201", grade:92 }
  ]},
  { id: 16, name: "Parker Lewis",    age: 22, courses:[
      { code:"PHYS101", grade:79 }, { code:"ENG301", grade:76 }
  ]},
  { id: 17, name: "Quinn Anderson",  age: 20, courses:[
      { code:"CS101", grade:84 }, { code:"MATH201", grade:88 }
  ]},
  { id: 18, name: "Riley Moore",     age: 19, courses:[
      { code:"CS102", grade:90 }, { code:"ENG301", grade:87 }
  ]},
  { id: 19, name: "Sophia Taylor",   age: 21, courses:[
      { code:"CS101", grade:86 }, { code:"CS102", grade:89 }, { code:"MATH201", grade:83 }
  ]},
  { id: 20, name: "Thomas Evans",    age: 20, courses:[
      { code:"PHYS101", grade:85 }, { code:"MATH201", grade:82 }, { code:"ENG301", grade:80 }
  ]}
];

const courses = [
  { code:"CS101",   title:"Intro to CS",     credits:4, instructorId:100 },
  { code:"CS102",   title:"Data Structures", credits:3, instructorId:101 },
  { code:"MATH201", title:"Calculus II",     credits:4, instructorId:102 },
  { code:"PHYS101", title:"Physics I",       credits:4, instructorId:103 },
  { code:"ENG301",  title:"English Lit.",    credits:3, instructorId:104 }
];

const instructors = [
  { id:100, name:"Dr. Smith",   dept:"Computer Science" },
  { id:101, name:"Prof. Lee",   dept:"Computer Science" },
  { id:102, name:"Dr. Gupta",   dept:"Mathematics" },
  { id:103, name:"Dr. O’Brien", dept:"Physics" },
  { id:104, name:"Prof. Davis", dept:"English" }
];


//   AUTO‑SYNCED 2‑D MATRIX

const studentMatrix = students.map(function(s) {
  return [s.id, s.name, s.age];
});


//   CORE STUDENT UTILITIES  (pure, non‑mutating)

const addStudent = function(students, newStudent) {
  return list.concat([newStudent]);
};

const removeStudentById = function(students, id) {
  return list.filter(function(s) {
    return s.id !== id;
  });
};

const updateStudentName = function(students, id, newName) {
  return list.map(function(s) {
    return (s.id === id) ? Object.assign({}, s, {name: newName}) : s;
  });
};

const getStudentById = function(students, id) {
  return students.find(function(s) {
    return s.id === id;
  }) || null;
};

function calculateAverageGrade(student) {
  if (!student.courses.length) return 0;
  var sum = student.courses.reduce(function(acc, c) {
    return acc + c.grade;
  }, 0);
  return sum / student.courses.length;
}

const getHonorRoll = function(students, threshold) {
  return students.filter(function(s) {
    return calculateAverageGrade(s) >= threshold;
  });
};

function getCourseRoster(students, courseCode) {
  return [].concat.apply([], list.map(function(s) {
    var c = s.courses.find(function(ci) {
      return ci.code === courseCode;
    });
    return c ? [{ id: s.id, name: s.name, grade: c.grade }] : [];
  }));
}


//   LOOP‑BASED REPORTS

function printStudentSummaries(students) {
  for (var i=0; i<students.length; i++) {
    var s = students[i];
    console.log(s.id + " • " + s.name + " • Avg " + calculateAverageGrade(s).toFixed(2));
  }
}

function findFirstUnderage(students, ageLimit) {
  for (var i=0; i<students.length; i++) {
    if (students[i].age < ageLimit) return students[i];
  }
  return null;
}

function countFailingCourses(students, passMark) {
  var count = 0;
  for (var i=0; i<students.length; i++) {
    var courses = students[i].courses;
    for (var j=0; j<courses.length; j++) {
      if (courses[j].grade < passMark) count++;
    }
  }
  return count;
}


//   COURSE STATISTICS

function printCourseStats(students) {
  var buckets = {};
  list.forEach(function(s) {
    s.courses.forEach(function(c) {
      if (!buckets[c.code]) buckets[c.code] = [];
      buckets[c.code].push(c.grade);
    });
  });

  Object.keys(buckets).forEach(function(code) {
    var grades = buckets[code];
    var min = Math.min.apply(null, grades);
    var max = Math.max.apply(null, grades);
    var avg = grades.reduce(function(a,b){ return a+b; }, 0)/grades.length;
    var courseObj = courses.find(function(c) { return c.code === code; }) || {};
    var title = courseObj.title || code;
    console.log(title + ": min=" + min + ", max=" + max + ", avg=" + avg.toFixed(2));
  });
}


//   FACTORY + CLOSURE

function createGradeFilter(min, max) {
  return function(student) {
    return student.courses.some(function(c) {
      return c.grade >= min && c.grade <= max;
    });
  };
}


//   RELATIONAL‑STYLE UTILITIES

function getCoursesByInstructor(catalog, instructorId) {
  return catalog.filter(function(c) {
    return c.instructorId === instructorId;
  }).map(function(c) {
    return {code: c.code, title: c.title};
  });
}

function totalCreditsPerStudent(students, catalog) {
  return students.map(function(s) {
    var credits = s.courses.reduce(function(tot, c) {
      var course = catalog.find(function(k) {
        return k.code === c.code;
      });
      return course ? tot + course.credits : tot;
    }, 0);
    return {id: s.id, name: s.name, totalCredits: credits};
  });
}

function studentTranscript(students, catalog, teachers) {
  return students.map(function(s) {
    var transcript = s.courses.map(function(c) {
      var courseObj = catalog.find(function(k) {
        return k.code === c.code;
      }) || {};
      var instructor = teachers.find(function(t) {
        return t.id === courseObj.instructorId;
      }) || {};
      return {
        course: c.code + " – " + (courseObj.title || "?"),
        grade: c.grade,
        instructorName: instructor.name || "Unknown"
      };
    });
    return {id: s.id, name: s.name, transcript: transcript};
  });
}

function courseAverages(students) {
  var acc = {};
  students.forEach(function(s) {
    s.courses.forEach(function(c) {
      if (!acc[c.code]) acc[c.code] = [];
      acc[c.code].push(c.grade);
    });
  });
  return Object.keys(acc).map(function(code) {
    var grades = acc[code];
    var avg = grades.reduce(function(a,b){ return a+b; }, 0)/grades.length;
    return {course: code, avgGrade: avg.toFixed(2)};
  });
}

function topStudentsByCourse(students, courseCode, n) {
  return students
    .map(function(s) {
      var c = s.courses.find(function(ci) {
        return ci.code === courseCode;
      });
      return c ? {name: s.name, grade: c.grade} : null;
    })
    .filter(function(x) { return x !== null; })
    .sort(function(a,b) { return b.grade - a.grade; })
    .slice(0, n);
}


//  DEMO (I have put some demo logs to check whether the logic is correct )

console.log("=== Student Summaries ===");
printStudentSummaries(students);

console.log("\nHonor roll (avg ≥90):",
  getHonorRoll(students, 90).map(function(s) { return s.name; }));

console.log("\nCourse statistics:");
printCourseStats(students);

console.log("\nTop 3 in CS101:");
console.table(topStudentsByCourse(students, "CS101", 3));


