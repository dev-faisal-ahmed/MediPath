'use client';

import { QUERY_KEYS } from '@/api-lib';
import { FormDialog } from '@/components/shared/form/form.dialog';
import { ServiceForm, TServiceForm } from './service.form';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addService } from '@/api-lib/query';
import { toast } from 'sonner';
import { errorMessageGen } from '@/helper';
import { usePopupState } from '@/hooks';

const FORM_ID = QUERY_KEYS.SERVICE + '_ADD';

export function AddService() {
  const queryClient = useQueryClient();
  const { open, onOpenChange } = usePopupState();

  const { mutate } = useMutation({
    mutationKey: [FORM_ID],
    mutationFn: addService,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SERVICE] });
      toast.success(response.message);
      onOpenChange(false);
    },
    onError: (error) => {
      toast.error(errorMessageGen(error));
    },
  });

  const handleAddService = (formData: TServiceForm) => {
    mutate({ ...formData, price: Number(formData.price) });
  };

  return (
    <>
      <Button onClick={() => onOpenChange(true)}>
        <PlusIcon /> Add Contact
      </Button>
      <FormDialog
        formId={FORM_ID}
        title="Add Service"
        description="Provide service information to add one"
        submitButtonTitle="Add Service"
        submitLoadingTitle="Adding Service..."
        open={open}
        onOpenChange={onOpenChange}
      >
        <ServiceForm formId={FORM_ID} onSubmit={handleAddService} />
      </FormDialog>
    </>
  );
}