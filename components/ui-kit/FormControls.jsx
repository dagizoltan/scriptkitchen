export default function FormControls() {
  return (
    <section class="card">
      <div class="card-header">Form Controls</div>
      <div class="card-body">
        <form>
          <div class="input-group">
            <label for="input1">Text Input</label>
            <input id="input1" type="text" placeholder="Type here..." />
          </div>
          <div class="input-group">
            <label for="select1">Select</label>
            <select id="select1">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" /> Checkbox
            </label>
            <label>
              <input type="checkbox" /> Another
            </label>
          </div>
          <div class="radio-group">
            <label>
              <input type="radio" name="r1" /> Radio 1
            </label>
            <label>
              <input type="radio" name="r1" /> Radio 2
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
