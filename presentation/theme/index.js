import createTheme from "../../createTheme";

const colors = {
  primary: "#FFF",
  secondary: "#303030",
  tertiary: "#303030",
  quaternary: "#303030",
  text: "#303030"
};

const theme = createTheme(colors, {
    primary: {
      name: "Lato",
      googleFont: true,
    },
    secondary: {
      name: "Lato",
      googleFont: true,
      styles: ["Black"]
    }
  }, {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: '4rem',
        },
        h2: {
          fontSize: '3.5rem',
        },
        h3: {
          fontSize: '3rem',
        },
        h4: {
          fontSize: '2.5rem',
        },
        h5: {
          fontSize: '2rem',
        },
        h6: {
          fontSize: '1.5rem',
        }
      },
      codePane: {
        fontSize: '1.3rem'
      },
      text: {
        color: colors.text
      },
      link: {
        color: colors.text,
        textDecoration: 'underline'
      }
    }
  });

export default theme;
