import React from "react";
import { observer } from "mobx-react";

import { Card, DropdownButton, Dropdown, Button } from "react-bootstrap";

import { resStore } from "../../App";

const StepsCard = observer((): JSX.Element => {

  return (
    <Card style={{ width: "350px" }}>
      <Card.Title className="mt-2">Подтвердите данные</Card.Title>
      <Card.Body>
        <Card.Text>
          <span>Были введены следующие числа:</span><br /><br/>
          <span className="lead">{resStore.numbers.join(", ")}</span>
          <br />
          <br />
          <span>
            При нажатии на кнопку "Далее" будет произведено сложение введенных
            вами чисел.
          </span><br/><br/>
          <span>
            При нажатии на кнопку "Назад" введенные числа будут стерты и их
            потребуется ввести заново
          </span>
        </Card.Text>
        <DropdownButton
          size="sm"
          className="mt-3"
          variant="outline-secondary"
          title="Сортировать"
          autoClose="outside"
        >
          <Dropdown.Item>
            <Button
              onClick={() => {
                resStore.sortNumbersAsc();
              }}
              size="sm"
              variant="outline-secondary"
            >
              По возрастанию
            </Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Button
              onClick={() => {
                resStore.sortNumbersDesc();
              }}
              size="sm"
              variant="outline-secondary"
            >
              По убыванию
            </Button>
          </Dropdown.Item>
          {/* <Dropdown.Item>
            <DropdownButton
              autoClose="outside"
              title="Больше или меньше выбранного числа"
              size="sm"
              variant="outline-secondary"
            >
              <Dropdown.Item>
                <InputGroup>
                  <DropdownButton
                    variant="outline-secondary"
                    size="sm"
                    title={equat ? "Меньше, чем" : "Больше, чем"}
                  >
                    <Dropdown.Item>
                      <Button
                        onClick={() => {
                          setEquat(0);
                        }}
                        variant="outline-secondary"
                        size="sm"
                      >
                        Больше, чем
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Button
                        onClick={() => {
                          setEquat(1);
                        }}
                        variant="outline-secondary"
                        size="sm"
                      >
                        Меньше, чем
                      </Button>
                    </Dropdown.Item>
                  </DropdownButton>
                  <FormControl
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setEquatItem(Number.isNaN(val) ? 0 : val);
                    }}
                  />
                  <Button
                    onClick={() => {
                      if (equat === 0) {
                        resStore.greaterThan(equatItem);
                      }
                      resStore.lesserThan(equatItem);
                    }}
                    size="sm"
                    variant="outline-secondary"
                  >
                    Готово
                  </Button>
                </InputGroup>
              </Dropdown.Item>
            </DropdownButton>
          </Dropdown.Item> */}
        </DropdownButton>
      </Card.Body>
    </Card>
  );
});

export default StepsCard;
