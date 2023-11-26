import React, { useState } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';

function AssignEvent() {
  const [formComponents, setFormComponents] = useState([
    {
      selectedRole: '',
      selectedItems: [],
      searchTerm: '',
    },
  ]);

  const registeredEventOptions = ["Event 1", "Event 2", "Event 3"];
  const assignRoleOptions = ["Role 1", "Role 2", "Role 3"];
  const roleItems = [
    { id: 1, name: 'Item 1', role: 'Role 1' },
    { id: 2, name: 'Item 2', role: 'Role 1' },
    { id: 3, name: 'Item 3', role: 'Role 2' },
    { id: 4, name: 'Item 4', role: 'Role 2' },
    { id: 5, name: 'Item 5', role: 'Role 3' },
  ];

  const handleAddItem = () => {
    const newFormComponent = {
      selectedRole: '',
      selectedItems: [],
      searchTerm: '',
    };

    setFormComponents([...formComponents, newFormComponent]);
  };

  const handleRemoveItem = (index) => {
    const updatedFormComponents = formComponents.filter((_, i) => i !== index);
    setFormComponents(updatedFormComponents);
  };

  const handleRoleChange = (event, index) => {
    const updatedFormComponents = [...formComponents];
    updatedFormComponents[index].selectedRole = event.target.value;
    setFormComponents(updatedFormComponents);
  };

  const handleSearch = (event, index) => {
    const updatedFormComponents = [...formComponents];
    updatedFormComponents[index].searchTerm = event.target.value;
    setFormComponents(updatedFormComponents);
  };

  const addSelectedItem = (itemName, index) => {
    const updatedFormComponents = [...formComponents];
    const selectedItems = updatedFormComponents[index].selectedItems;

    if (selectedItems.includes(itemName)) {
      updatedFormComponents[index].selectedItems = selectedItems.filter((item) => item !== itemName);
    } else {
      updatedFormComponents[index].selectedItems.push(itemName);
    }

    setFormComponents(updatedFormComponents);
  };

  return (
    <div>
      <FormGroup>
        <Label for="registeredEvent">Select Your Registered Event</Label>
        <Input
          type="select"
          name="registeredEvent"
          value=""
        >
          <option value="">Select Your Registered Event</option>
          {registeredEventOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Input>
      </FormGroup>

      {formComponents.map((form, index) => (
        <div key={index}>
          <FormGroup>
            <Label for={`assignRole${index}`}>Assign Role</Label>
            <Input
              type="select"
              name={`assignRole${index}`}
              value={form.selectedRole}
              onChange={(event) => handleRoleChange(event, index)}
            >
              <option value="">Select Role</option>
              {assignRoleOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </Input>
          </FormGroup>

          <div style={{ display: 'flex' }}>
            <FormGroup style={{ flex: 1 }}>
              <Label for={`searchRoleItems${index}`}>Search Role Items</Label>
              <Input
                type="text"
                placeholder="Search Role Items"
                value={form.searchTerm}
                onChange={(event) => handleSearch(event, index)}
              />
            </FormGroup>
            <FormGroup style={{ flex: 2 }}>
              <Label for={`roleItems${index}`}>Role Items</Label>
              <Input type="select" name={`roleItems${index}`} multiple>
                {roleItems
                  .filter(
                    (item) =>
                      item.role === form.selectedRole &&
                      item.name.toLowerCase().includes(form.searchTerm.toLowerCase())
                  )
                  .map((item, i) => (
                    <option
                      key={i}
                      value={item.name}
                      onClick={() => addSelectedItem(item.name, index)}
                    >
                      {item.name}
                    </option>
                  ))}
                {(roleItems.filter(
                  (item) =>
                    item.role === form.selectedRole &&
                    item.name.toLowerCase().includes(form.searchTerm.toLowerCase())
                ).length === 0) && (
                  <option disabled>No items found</option>
                )}
              </Input>
            </FormGroup>
          </div>

          <FormGroup>
            <Label for={`selectedItems${index}`}>Selected Items</Label>
            <Input type="select" name={`selectedItems${index}`} multiple>
              {(form.selectedItems.length === 0) && (
                <option disabled>No selected items</option>
              )}
              {form.selectedItems.map((item, i) => (
                <option key={i} value={item} onClick={() => addSelectedItem(item, index)}>
                  {item}
                </option>
              ))}
            </Input>
          </FormGroup>
          {index > 0 && (
            <Button color="danger" onClick={() => handleRemoveItem(index)}>Remove Item</Button>
          )}
        </div>
      ))}

      <Button color="primary" onClick={handleAddItem}>Add Item</Button>
    </div>
  );
}

export default AssignEvent;
