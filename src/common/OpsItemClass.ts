
export class OpsItemClass {
  title: string;
  body: Element | string;
  buttonName: string;
  buttonAction: Function;

  constructor(
    title: string,
    body: Element | string,
    buttonName: string,
    buttonAction: Function
  ) {
    this.title = title;
    this.body = body;
    this.buttonName = buttonName;
    this.buttonAction = buttonAction;
  }
}

const firstStepBody = `
    <form>
        <input type="text" />
        <input type="text" />
    </form>
`;

const onClick = () => {
  alert("кнопка нажата");
};

export const opsItem = new OpsItemClass(
  "Ввод данных",
  firstStepBody,
  "Добавить число",
  onClick
);
