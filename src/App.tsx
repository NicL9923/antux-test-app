import {
  Button,
  Divider,
  LargeTitle,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  Subtitle1,
  Textarea,
} from "@fluentui/react-components";

const App = () => {
  return (
    <>
      <LargeTitle> AntUX Austin Team - Dev App</LargeTitle>
      <Subtitle1>Howdy and welcome!</Subtitle1>

      <MessageBar intent="success">
        <MessageBarBody>
          <MessageBarTitle>Success!</MessageBarTitle>
          If you're seeing this, you must've done something right!
        </MessageBarBody>
      </MessageBar>

      <Divider>Haha look at me I'm dividing the page!</Divider>

      <div>
        <Button appearance="primary" size="large">
          I don't do anything, but you can click me anyways
        </Button>
      </div>

      <div>
        <Textarea placeholder="Will I help you with HAR file parsing one day? Who knows!?" />
      </div>
    </>
  );
};

export default App;
