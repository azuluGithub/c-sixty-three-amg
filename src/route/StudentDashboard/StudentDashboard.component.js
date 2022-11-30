import { PureComponent } from 'react';

import StudentSideBar from '../../component/StudentSideBar';
import StudentTopBar from '../../component/StudentTopBar';

import './StudentDashboard.style.scss';

class StudentDashboardComponent extends PureComponent {

  lecturersList = [
    {
      firstname: 'marvin',
      lastname: 'dube',
      email: 'marvin@dube.com',
      imgUrl: '/assets/portal/images/user1.png',
      module: {
        name: 'intro to med',
        code: 'MED101',
      },
      status: 'online',
      startDate: '24/04/18'
    },
    {
      firstname: 'emelia',
      lastname: 'ntombo',
      email: 'emz@ntombo.com',
      imgUrl: '/assets/portal/images/user3.png',
      module: {
        name: 'Bio-Chem',
        code: 'BCM250',
      },
      status: 'offline',
      startDate: '11/01/19'
    },
  ];

  projectList = [
    {
      assignment: 'assignment 1',
      module: 'MED101',
      status: 'done',
      mark: '80%',
    },
    {
      assignment: 'assignment 2',
      module: 'MED101',
      status: 'done',
      mark: '80%',
    },
    {
      assignment: 'assignment 3',
      module: 'MED101',
      status: 'done',
      mark: '80%',
    },
  ];
 
  renderSideBar() {
    return (
      <div className='FixedSideBar'>
        <StudentSideBar />
      </div>
    );
  }

  renderLecturerImageSection(lecturer) {
    const { firstname, imgUrl, lastname, email } = lecturer;
    
    return (
      <td className='StudentDashboard-TrImageContentContainer'>
        <div className='StudentDashboard-TrImageContent'>
          <div className='StudentDashboard-TrImageContentSplit'>
            <div className='StudentDashboard-TrImage'>
              <img
                className='StudentDashboard-TrImg'
                src={imgUrl}
                alt='student profile display'
              />
            </div>
            <div className='StudentDashboard-TrTextContainer'>
              <span className='StudentDashboard-TrFullName'>{firstname} { lastname }</span>
              <span className='StudentDashboard-TrText'>{ email }</span>
            </div>
          </div>
        </div>
      </td>
    );
  }

  renderLectureModuleSection(lecturer) {
    const { module: { name, code } } = lecturer;

    return (
      <td className='StudentDashboard-ModuleContainer'>
        <div className='StudentDashboard-ModuleContent'>
          <p className='StudentDashboard-ModuleName'>{ name }</p>
          <p className='StudentDashboard-CodeCode'>{ code }</p>
        </div>
      </td>
    )
  }

  renderLectureStatusSection(lecturer) {
    const { status } = lecturer;

    return (
      <td className='StudentDashboard-Status'>
        { status === 'online' ?
            <div className='StudentDashboard-StatusOnline'>{status}</div>
              :
            <div className='StudentDashboard-StatusOffline'>{status}</div>
        }
      </td>
    )
  }

  renderLectureDateSection(lecturer) {
    const { startDate } = lecturer;

    return (
      <td className='StudentDashboard-StartDateContainer'>
        <p className='StudentDashboard-StartDate'>{ startDate }</p>
      </td>
    )
  }

  renderLectureActionSection() {
    return (
      <td className='StudentDashboard-EditContainer'>
        <p className='StudentDashboard-Edit'>{ 'Edit' }</p>
      </td>
    )
  }

  renderLecture(lecturer) {
    return (
      <tbody className='StudentDashboard-Tbody'>
        <tr className='StudentDashboard-Tr'>
          { this.renderLecturerImageSection(lecturer) }
          { this.renderLectureModuleSection(lecturer) }
          { this.renderLectureStatusSection(lecturer) }
          { this.renderLectureDateSection(lecturer) }
          { this.renderLectureActionSection() }
        </tr>
      </tbody>
    );
  }

  renderModuleTable() {
    const { lecturersList } = this;

    return (
      <table className='StudentDashboard-Table'>
        <tr className='StudentDashboard-Tr'>
          <th className='StudentDashboard-Th'>
            <span className='StudentDashboard-ThHeading'>{'lecturer'}</span>
          </th>
          <th className='StudentDashboard-ThOther'>
            <span className='StudentDashboard-ThHeading'>{'Module'}</span>
          </th>
          <th className='StudentDashboard-ThOther'>
            <span className='StudentDashboard-ThHeading'>{'status'}</span>
          </th>
          <th className='StudentDashboard-ThOther'>
            <span className='StudentDashboard-ThHeading'>{'start date'}</span>
          </th>
          <th className='StudentDashboard-ThOther'>
            <span className='StudentDashboard-ThHeading'>{'action'}</span>
          </th>
        </tr>
        { lecturersList.map(this.renderLecture.bind(this)) }
      </table>
    );
  }

  renderModuleOutline() {
    return (
      <div className='StudentDashboard-OutlineContainer'>
        <div className='StudentDashboard-OutlineHeader'>
          <span className='StudentDashboard-OutlineHeading'>
            {'Modules Outline'}
          </span>
        </div>
        <div className='StudentDashboard-OutlineContent'>
          { this.renderModuleTable() }
        </div>
      </div>
    );
  }

  renderProjectAssignment(project) {
    const { assignment } = project;
    return (
      <td className='StudentDashboard-AssignmentContainer'>
        <p className='StudentDashboard-Assignment'>{ assignment }</p>
      </td>
    )
  }

  renderProjectModule(project) {
    const { module } = project;

    return (
      <td className='StudentDashboard-ModuleContainer'>
        <p className='StudentDashboard-Module'>{ module }</p>
      </td>
    )
  }

  renderProjectStatus(project) {
    const { status } = project;
    return (
      <td className='StudentDashboard-ProjectStatusContainer'>
        <p className='StudentDashboard-ProjectStatus'>{ status }</p>
      </td>
    )
  }

  renderProjectMark(project) {
    const { mark } = project;

    return (
      <td className='StudentDashboard-MarkContainer'>
        <div className='StudentDashboard-MarkContent'>
          <p className='StudentDashboard-Mark'>{ mark }</p>
          <div className='StudentDashboard-MarkProgress'>

          </div>
        </div>
      </td>
    )
  }

  renderProjectAction() {
    return (
      <td className='StudentDashboard-EditProjectContainer'>
        <p className='StudentDashboard-EditProject'>{ 'Edit' }</p>
      </td>
    )
  }

  renderProject(project) {
    return (
      <tbody className='StudentDashboard-Tbody'>
        <tr className='StudentDashboard-Tr'>
          { this.renderProjectAssignment(project) }
          { this.renderProjectModule(project) }
          { this.renderProjectStatus(project) }
          { this.renderProjectMark(project) }
          { this.renderProjectAction() }
        </tr>
      </tbody>
    );
  }

  renderProjectTable() {
    const { projectList } = this;

    return (
      <table className='StudentDashboard-Table'>
        <tr className='StudentDashboard-Tr'>
          <th className='StudentDashboard-Th'>
            <span className='StudentDashboard-ThHeading'>{'Assignment'}</span>
          </th>
          <th className='StudentDashboard-ThOther'>
            <span className='StudentDashboard-ThHeading'>{'For Module'}</span>
          </th>
          <th className='StudentDashboard-ThOther'>
            <span className='StudentDashboard-ThHeading'>{'status'}</span>
          </th>
          <th className='StudentDashboard-ThOther'>
            <span className='StudentDashboard-ThHeading'>{'mark'}</span>
          </th>
          <th className='StudentDashboard-ThOther'>
            <span className='StudentDashboard-ThHeading'>{'action'}</span>
          </th>
        </tr>
        { projectList.map(this.renderProject.bind(this)) }
      </table>
    );
  }

  renderProjectOutline() {
    return (
      <div className='StudentDashboard-OutlineContainer'>
        <div className='StudentDashboard-OutlineHeader'>
          <span className='StudentDashboard-OutlineHeading'>
            {'Projects/Assignments Outline'}
          </span>
        </div>
        <div className='StudentDashboard-OutlineContent'>
          { this.renderProjectTable() }
        </div>
      </div>
    );
  }

  renderMain() {
    return (
      <div className='StudentDashboard-Main'>
        <StudentTopBar />
        <div className='StudentDashboard-OutlineMain'>
            { this.renderModuleOutline() }
        </div>
        <div className='StudentDashboard-OutlineMain'>
            { this.renderProjectOutline() }
        </div>
      </div>
    )
  }
    
  renderComponents() {
    return (
      <main className='StudentDashboard'>
        <div className='StudentDashboard-Components'>
          { this.renderSideBar() }
          { this.renderMain() }
        </div>
      </main>
    );
  }

  render() {
    return this.renderComponents();
  }
}

export default StudentDashboardComponent;