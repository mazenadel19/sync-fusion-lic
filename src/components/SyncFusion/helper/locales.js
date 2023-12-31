/* eslint-disable quotes */
import { L10n, setCulture } from '@syncfusion/ej2-base';

export function loadLocale(locale = 'en') {
    setCulture(locale);
    L10n.load({
        en: {
            name: 'Task Name',
            resourceInfo: 'Resources',
            type: 'Task Type',
        },
        ar: {
            gantt: {
                emptyRecord: 'لا سجلات لعرضها',
                id: 'هوية شخصية',
                name: 'اسم',
                startDate: 'تاريخ البدء',
                endDate: 'تاريخ الانتهاء',
                duration: 'المدة الزمنية',
                progress: 'تقدم',
                dependency: 'الاعتماد',
                notes: 'ملاحظات',
                baselineStartDate: 'تاريخ البدء الأساسي',
                baselineEndDate: 'تاريخ نهاية خط الأساس',
                taskMode: 'وضع المهام',
                changeScheduleMode: 'تغيير وضع الجدول',
                subTasksStartDate: 'تاريخ بدء المهام الفرعية',
                subTasksEndDate: 'تاريخ انتهاء المهام الفرعية',
                scheduleStartDate: 'جدولة تاريخ البدء',
                scheduleEndDate: 'تاريخ انتهاء الجدول الزمني',
                auto: 'تلقاءي',
                manual: 'كتيب',
                type: 'اكتب',
                offset: 'عوض',
                resourceName: 'مصادر',
                resourceID: 'معرف المورد',
                day: 'يوم',
                hour: 'ساعة',
                minute: 'دقيقة',
                days: 'أيام',
                hours: 'ساعات',
                minutes: 'الدقائق',
                generalTab: 'جنرال لواء',
                customTab: 'أعمدة مخصصة',
                writeNotes: 'اكتب ملاحظات',
                addDialogTitle: 'مهمة جديدة',
                editDialogTitle: 'معلومات المهمة',
                saveButton: 'حفظ',
                add: 'إضافة',
                edit: 'تعديل',
                update: 'تحديث',
                delete: 'حذف',
                cancel: 'إلغاء',
                search: 'بحث',
                task: ' مهمة',
                tasks: ' مهام',
                zoomIn: 'تكبير',
                zoomOut: 'تصغير',
                zoomToFit: 'تكبير لتناسب',
                excelExport: 'اكسل التصدير',
                csvExport: 'تصدير CSV',
                expandAll: 'توسيع الكل',
                collapseAll: 'انهيار جميع',
                nextTimeSpan: 'الجدول الزمني التالي',
                prevTimeSpan: 'الجدول الزمني السابق',
                okText: 'حسنا',
                confirmDelete: 'هل أنت متأكد أنك تريد حذف السجل؟',
                from: 'من عند',
                to: 'إلى',
                taskLink: 'رابط المهمة',
                lag: 'بطئ',
                start: 'بداية',
                finish: 'إنهاء',
                enterValue: 'أدخل القيمة',
                taskBeforePredecessor_FS:
                    "قمت بنقل '{0}' للبدء قبل انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
                taskAfterPredecessor_FS:
                    "قمت بنقل '{0}' بعيدًا عن '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
                taskBeforePredecessor_SS:
                    "قمت بنقل '{0}' للبدء قبل أن يبدأ '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
                taskAfterPredecessor_SS:
                    "قمت بنقل '{0}' للبدء بعد بدء '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
                taskBeforePredecessor_FF:
                    "قمت بنقل '{0}' للإنهاء قبل انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
                taskAfterPredecessor_FF:
                    "قمت بنقل '{0}' للإنهاء بعد انتهاء '{1}' ويتم ربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
                taskBeforePredecessor_SF:
                    "قمت بنقل '{0}' بعيدًا عن '{1}' لبدء التشغيل وترتبط المهمتان. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
                taskAfterPredecessor_SF:
                    "قمت بنقل '{0}' للإنهاء بعد بدء '{1}' وربط المهمتين. ونتيجة لذلك ، لا يمكن احترام الروابط. حدد إجراءً واحدًا أدناه للقيام به",
                taskInformation: 'معلومات المهمة',
                deleteTask: 'حذف المهمة',
                deleteDependency: 'حذف التبعية',
                convert: 'تحويل',
                save: 'حفظ',
                above: 'في الاعلى',
                below: 'أدناه',
                child: 'طفل',
                milestone: 'معلما',
                toTask: 'لمهمة',
                toMilestone: 'إلى معلم',
                eventMarkers: 'علامات الحدث',
                leftTaskLabel: 'تسمية المهمة اليسرى',
                rightTaskLabel: 'تسمية المهمة الصحيحة',
                timelineCell: 'خلية الجدول الزمني',
                confirmPredecessorDelete:
                    'هل أنت متأكد أنك تريد إزالة رابط التبعية؟',
                unit: 'وحدة',
                work: 'عمل',
                taskType: 'نوع المهمة',
                unassignedTask: 'مهمة غير محددة',
                group: 'مجموعة',
                indent: 'مسافة بادئة',
                outdent: 'عفا عليها الزمن',
                segments: 'شرائح',
                splitTask: 'تقسيم المهمة',
                mergeTask: 'مهمة الدمج',
                left: 'اليسار',
                right: 'حق',
            },
        },
        fr: {
            gantt: {
                emptyRecord: 'Aucun enregistrement à afficher',
                id: 'ID',
                name: 'Nom',
                startDate: 'Date de début',
                endDate: 'Date de fin',
                duration: 'Durée',
                progress: 'Avancement',
                dependency: 'Dépendance',
                notes: 'Notes',
                baselineStartDate: 'Date de début de référence',
                baselineEndDate: 'Date de fin de référence',
                taskMode: 'Mode de tâche',
                changeScheduleMode: 'Changer le mode de planification',
                subTasksStartDate: 'Date de début des sous-tâches',
                subTasksEndDate: 'Date de fin des sous-tâches',
                scheduleStartDate: 'Date de début de la planification',
                scheduleEndDate: 'Date de fin de la planification',
                auto: 'Automatique',
                manual: 'Manuel',
                type: 'Type',
                offset: 'Décalage',
                resourceName: 'Ressource',
                resourceID: 'ID de la ressource',
                day: 'Jour',
                hour: 'Heure',
                minute: 'Minute',
                days: 'Jours',
                hours: 'Heures',
                minutes: 'Minutes',
                generalTab: 'Onglet général',
                customTab: 'Onglets personnalisés',
                writeNotes: 'Écrire des notes',
                addDialogTitle: 'Nouvelle tâche',
                editDialogTitle: 'Informations de la tâche',
                saveButton: 'Enregistrer',
                add: 'Ajouter',
                edit: 'Modifier',
                update: 'Mettre à jour',
                delete: 'Supprimer',
                cancel: 'Annuler',
                search: 'Rechercher',
                task: 'Tâche',
                tasks: 'Tâches',
                zoomIn: 'Zoom avant',
                zoomOut: 'Zoom arrière',
                zoomToFit: 'Ajuster au contenu',
                excelExport: 'Export Excel',
                csvExport: 'Export CSV',
                expandAll: 'Développer tout',
                collapseAll: 'Réduire tout',
                nextTimeSpan: 'Période suivante',
                prevTimeSpan: 'Période précédente',
                okText: 'OK',
                confirmDelete:
                    "Êtes-vous sûr de vouloir supprimer l'enregistrement ?",
                from: 'De',
                to: 'À',
                taskLink: 'Lien de tâche',
                lag: 'Retard',
                start: 'Début',
                finish: 'Fin',
                enterValue: 'Saisir la valeur',
                taskBeforePredecessor_FS:
                    "Vous avez déplacé '{0}' pour commencer avant la fin de '{1}' et les tâches sont liées. Par conséquent, les liens ne peuvent pas être respectés. Veuillez sélectionner une seule action ci-dessous.",
                taskAfterPredecessor_FS:
                    "Vous avez déplacé '{0}' loin de '{1}' et les tâches sont liées. Par conséquent, les liens ne peuvent pas être respectés. Veuillez sélectionner une seule action ci-dessous.",
                taskBeforePredecessor_SS:
                    "Vous avez déplacé '{0}' pour commencer avant le début de '{1}' et les tâches sont liées. Par conséquent, les liens ne peuvent pas être respectés. Veuillez sélectionner une seule action ci-dessous.",
                taskAfterPredecessor_SS:
                    "Vous avez déplacé '{0}' pour commencer après le début de '{1}' et les tâches sont liées. Par conséquent, les liens ne peuvent pas être respectés. Veuillez sélectionner une seule action ci-dessous.",
                taskBeforePredecessor_FF:
                    "Vous avez déplacé '{0}' pour terminer avant la fin de '{1}' et les tâches sont liées. Par conséquent, les liens ne peuvent pas être respectés. Veuillez sélectionner une seule action ci-dessous.",
                taskAfterPredecessor_FF:
                    "Vous avez déplacé '{0}' pour terminer après la fin de '{1}' et les tâches sont liées. Par conséquent, les liens ne peuvent pas être respectés. Veuillez sélectionner une seule action ci-dessous.",
                taskBeforePredecessor_SF:
                    "Vous avez déplacé '{0}' loin de '{1}' pour commencer, et les tâches sont liées. Par conséquent, les liens ne peuvent pas être respectés. Veuillez sélectionner une seule action ci-dessous.",
                taskAfterPredecessor_SF:
                    "Vous avez déplacé '{0}' pour terminer après le début de '{1}' et les tâches sont liées. Par conséquent, les liens ne peuvent pas être respectés. Veuillez sélectionner une seule action ci-dessous.",
                taskInformation: 'Informations de la tâche',
                deleteTask: 'Supprimer la tâche',
                deleteDependency: 'Supprimer la dépendance',
                convert: 'Convertir',
                save: 'Enregistrer',
                above: 'Au-dessus',
                below: 'En dessous',
                child: 'Enfant',
                milestone: 'Jalon',
                toTask: 'Vers la tâche',
                toMilestone: 'Vers le jalon',
                eventMarkers: "Marqueurs d'événements",
                leftTaskLabel: 'Libellé de tâche à gauche',
                rightTaskLabel: 'Libellé de tâche à droite',
                timelineCell: 'Cellule de chronologie',
                confirmPredecessorDelete:
                    'Êtes-vous sûr de vouloir supprimer la dépendance ?',
                unit: 'Unité',
                work: 'Travail',
                taskType: 'Type de tâche',
                unassignedTask: 'Tâche non affectée',
                group: 'Groupe',
                indent: 'Retrait',
                outdent: 'Déretrait',
                segments: 'Segments',
                splitTask: 'Diviser la tâche',
                mergeTask: 'Fusionner la tâche',
                left: 'Gauche',
                right: 'Droite',
            },
        },
    });
}
