import Checkbox from './Checkbox/Checkbox'
import './styles.css'

function App() {
  return (
    <div className="app">
      <div className="regular-checkboxes-outer-wrapper">
        <div>
          <p>Basic Checkbox</p>
          <Checkbox label="Checkbox 1" />
        </div>
        <div>
          <p>Stacked Checkboxes</p>
          <Checkbox label="Checkbox 1" />
          <Checkbox label="Checkbox 2" />
          <Checkbox label="Checkbox 3" />
        </div>
        <div>
          <p>Inline Checkboxes</p>
          <div style={{ display: 'flex' }}>
            <Checkbox label="Checkbox 1" />
            <Checkbox label="Checkbox 2" />
            <Checkbox label="Checkbox 3" />
          </div>
        </div>
      </div>

      <div className="checkboxes-outer-wrapper">
        <div>
          <p>Checked</p>
          <Checkbox label="text_primary" checked />
        </div>
        <div>
          <p>Checked Disabled</p>
          <Checkbox label="text_primary" checked disabled />
        </div>
        <div>
          <p>Checkbox Disabled</p>
          <Checkbox label="text_primary" disabled />
        </div>
        <div>
          <p>Checked Partial</p>
          <Checkbox label="text_primary" checked partial />
        </div>
        <div>
          <p>Checked partial Disabled</p>
          <Checkbox label="text_primary" checked partial disabled />
        </div>
      </div>
    </div>
  )
}

export default App
