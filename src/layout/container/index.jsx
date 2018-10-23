import React, { Component, Fragment } from 'react'
import styles from './index.scss'
import Icon from 'components/icon'
import About from 'views/article/edit'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Container extends Component {
  render() {
    return (
      <Fragment>
          <aside className={styles.aside}>
            <ul>
              <li>
                <div><Icon />项目1</div>
              </li>
              <li>
                <div><Icon />项目2</div>
                <ul></ul>
              </li>
            </ul>
          </aside>
          <main className={styles.main}>
          <Router>
            <Route path="/" component={About} />
          </Router>
          </main>
        </Fragment>
    )
  }

  menu() {
    
  }
}

export default Container