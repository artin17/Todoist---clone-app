import React, { useState } from 'react';
import { firebase } from '../firebase'
import { generatePushId } from '../helpers/helpers';
import { useProjectsValue } from '../context/context';



export const AddProject = ({ shouldShow = false }) => {

    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');

    const projectId = generatePushId();
    const { projects, setProjects } = useProjectsValue();


    const addProject = () =>
        projectName &&
        firebase
            .firestore()
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: 'jlIFXIwyAL3tzHMtzRbw'
            })
            .then(() => {
                setProjects([...projects]);
                setProjectName('');
                setShow(false);
            });

    return (
        <div className="add-project" data-testid="add-project">
            {show && (
                <div className="add-project__input">
                    <input type="text"
                        value={projectName}
                        onChange={e => setProjectName(e.target.value)}
                        data-testid="project-name"
                        placeholder="Name your project" />
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={() => addProject()}
                        data-testid="add-project-submit">

                        Add Project

                            </button>
                    <span className="add-project__cancel"
                        data-testid="hide-project-overlay"
                        onClick={() => setShow(false)}
                    >
                        Cancel
                    </span>

                </div>
            )}
            <span className="add-project__plus">+</span>
            <span
                data-testid="hide-project-overlay"
                onClick={() => setShow(!show)}
                className="add-project__text"
            >
                Add Project
                    </span>
        </div>
    )
}