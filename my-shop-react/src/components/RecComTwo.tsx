import styled from "styled-components";
import ExpandableProperty from "./ExpandableProperty";
interface IterableObject {
  [s: number]: number | string | boolean | IterableObject;
}

interface Props {
  property: number | string | boolean | IterableObject;
  propertyName: string;
  rootProperty?: boolean;
  excludeBottomBorder: boolean;
}
const RecursivePropertyContainer = styled.div`
  padding-top: 10px;
  padding-left: 3px;
  margin-left: 10px;
  ${(props: { excludeBottomBorder: boolean }) =>
    props.excludeBottomBorder ? "" : "border-bottom: 1px solid #b2d6ff;"}
  color: #666;
  font-size: 16px;
`;

export const PropertyName = styled.span`
  color: black;
  font-size: 14px;
  font-weight: bold;
  background-color: red;
`;
const RecComTwo: React.FunctionComponent<Props> = (props) => {
  return (
    <RecursivePropertyContainer excludeBottomBorder={props.excludeBottomBorder}>
      {props.property ? (
        typeof props.property === "number" ||
        typeof props.property === "string" ||
        typeof props.property === "boolean" ? (
          <>
            <PropertyName>
              {camelCaseToNormal(props.propertyName)}:{" "}
              {/* {props.propertyName} */}
            </PropertyName>
            {props.property.toString()}
          </>
        ) : (
          <ExpandableProperty
            title={camelCaseToNormal(props.propertyName)}
            // title={props.propertyName}
            expanded={!!props.rootProperty}
          >
            {console.log('value',props.property)}
            {Object.values(props.property).map(
              (property, index, { length }) => {
                // console.log(property);
                return (
                  <RecComTwo
                    key={index}
                    property={property}
                    propertyName={
                      Object.getOwnPropertyNames(props.property)[index]
                    }
                    excludeBottomBorder={index === length - 1}
                  />
                );
              }
            )}
          </ExpandableProperty>
        )
      ) : (
        "Property is empty"
      )}
    </RecursivePropertyContainer>
  );
};
const camelCaseToNormal = (str: string) =>
  str.replace(/([A-Z])/g, " $1").replace(/^./, (str2) => str2.toUpperCase());

export default RecComTwo;
