import awsComponents from '../../assets/images/aws-components.png'
import sequenceDiagram from '../../assets/images/sequence-diagram.png'
import './DesignDocumentScreen.css'

function DesignDocumentScreen() {

    return (
        <div className="Design">
            <div className="scrollable-div">
                <h2>AWS Serverless architecture</h2>
                <img className="awsComponentsImage" src={awsComponents} alt="AWS Services"/>
                <h2>Sequence Diagram</h2>
                <img className="sequenceDiagramImage" src={sequenceDiagram} alt="Sequence Diagram"/>
            </div>
        </div>
    )
}

export default DesignDocumentScreen;