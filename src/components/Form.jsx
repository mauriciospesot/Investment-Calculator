import Input from "./Input";

export default function Form({ onChange, input }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          value={input.initialInvestment}
          label="Initial investment"
          type="number"
          name="initialInvestment"
          onChange={onChange}
        />
        <Input
          value={input.annualInvestment}
          label="Anual investment"
          type="number"
          name="annualInvestment"
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <Input
          value={input.expectedReturn}
          label="Expected return"
          type="number"
          name="expectedReturn"
          onChange={onChange}
        />
        <Input
          value={input.duration}
          label="Duration"
          type="number"
          name="duration"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
