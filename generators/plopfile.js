module.exports = function (plop) {
  plop.setGenerator('new component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'confirm',
        name: 'nested',
        message: 'Your component is inside a page?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'What is the path of your component?'
      },
      {
        type: 'input',
        name: 'component',
        message: 'What is the name of your component?'
      }
    ],
    actions: (data) => {
      const action = [];
      if (data.nested) {
        action.push({
          type: 'add',
          path: '../components/{{path}}/{{pascalCase component}}/{{pascalCase component}}.tsx',
          templateFile: 'templates/new-comp.hbs'
        }, {
          type: 'add',
          path: '../components/{{path}}/{{pascalCase component}}/{{pascalCase component}}.styled.tsx',
          templateFile: 'templates/style.hbs'
        }, {
          type: 'add',
          path: '../components/{{path}}/{{pascalCase component}}/{{pascalCase component}}.test.tsx',
          templateFile: 'templates/test.hbs'
        })
      } else {
        action.push({
          type: 'add',
          path: '../components/{{pascalCase component}}/{{pascalCase component}}.tsx',
          templateFile: 'templates/new-comp.hbs'
        }, {
          type: 'add',
          path: '../components/{{pascalCase component}}/{{pascalCase component}}.styled.tsx',
          templateFile: 'templates/style.hbs'
        }, {
          type: 'add',
          path: '../components/{{pascalCase component}}/{{pascalCase component}}.test.tsx',
          templateFile: 'templates/test.hbs'
        })
      }
      return action;
    }
  })
}