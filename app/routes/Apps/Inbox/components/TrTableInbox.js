import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { 
    Badge,
    Avatar,
    UncontrolledTooltip,
    CustomInput,
    AvatarAddOn,
    Media
} from './../../../../components';

import { randomArray, randomAvatar } from './../../../../utilities';

const status = [
    "warning",
    "danger",
    "success",
    "secondary"
];


const tag = [
    "primary",
    "secondary",
    "info"
];


const TrTableInbox = (props) => (
    <React.Fragment>
        <tr>
            <td className="align-middle">
                {
                    (Math.round(Math.random())) ? (
                        <span>
                            <i className="fa fa-circle fa-fw text-primary" id={`newMessage-${ props.id }` }></i>
                            <UncontrolledTooltip placement="bottom" target={`#newMessage-${ props.id }` }>
                                New Message
                            </UncontrolledTooltip>
                        </span>
                    ) : (
                             <span></span>
                    )
                }
            </td>
            <td className="align-middle">
                <CustomInput type="checkbox" label="" id={` mailboxCheckbox-${ props.id }` } />
            </td>
            <td className="align-middle">
                <Media>
                    <Media left className="d-flex align-self-center mr-3">
                        <div className="mr-2">
                            <a href="#" id="tooltipAddToFavorites">
                                <i className="fa fa-fw fa-star-o"></i>
                            </a>
                            <UncontrolledTooltip placement="top" target="tooltipAddToFavorites">
                                Add To Favorites
                            </UncontrolledTooltip>
                        </div>
                        <Avatar.Image
                            size="md"
                            src={ randomAvatar() }
                            addOns={[
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color="white"
                                    key="avatar-icon-bg"
                                />,
                                <AvatarAddOn.Icon 
                                    className="fa fa-circle"
                                    color={ randomArray(status) }
                                    key="avatar-icon-fg"
                                />
                            ]}
                        /> 
                    </Media>
                    <Media body>
                        <div className="mt-0 d-flex">
                            { faker.name.firstName() } { faker.name.lastName() }
                        </div>
                        <span>
                            { faker.address.state() }
                        </span>
                    </Media>
                </Media>
            </td>
            <td className="align-middle">
                <Link to="/apps/email-details">
                    { faker.company.catchPhrase() }
                </Link>
                <br />
                { faker.lorem.sentence() }
            </td>
            <td className="align-middle">
                <Badge pill color={ randomArray(tag) }>
                    { faker.commerce.department() }
                </Badge>
            </td>
            <td className="align-middle">
                <i className="fa fa-paperclip"></i>
            </td>
            <td className="align-middle text-right">
                30-Jun-2014<br />
                01:54 PM
            </td>
        </tr>

    </React.Fragment>
)

TrTableInbox.propTypes = {
    id: PropTypes.string
};

export { TrTableInbox };
