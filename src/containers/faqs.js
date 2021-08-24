import React from 'react';
import faqsData from '../fixtures/faqs';
import { Accordion } from '../components';

export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion.Frame>
        </Accordion>
    );
}

// import React from 'react';
// import jumboData from '../fixtures/jumbo';
// import { Jumbotron } from '../components';

// export function JumbotronContainer() {
//   return (
//     <Jumbotron.Container>
//       {jumboData.map((item) => (
//         <Jumbotron key={item.id} direction={item.direction}>
//           <Jumbotron.Pane>
//             <Jumbotron.Title>{item.title}</Jumbotron.Title>
//             <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
//           </Jumbotron.Pane>
//           <Jumbotron.Pane>
//             <Jumbotron.Image src={item.image} alt={item.alt} />
//           </Jumbotron.Pane>
//         </Jumbotron>
//       ))}
//     </Jumbotron.Container>
//   );
// }
